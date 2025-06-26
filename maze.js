//Javascript name: maze.js
//Date created: 13 June 2025
//Scripter: Greg Hamer
//Version: 0.1
//Contact: hamer.greg@gmail.com
// Note: Permission given to use this script in ANY kind of applications if
//       header lines are left unchanged.

// External dependencies: none,but needs the css and html in maze.html to display

//Global variables and constants
var LEFT = 1;
var TOP = 2;
var RIGHT = 4;
var BOTTOM = 8;
var direction = [[LEFT, TOP, RIGHT, BOTTOM], [LEFT, TOP, BOTTOM, RIGHT],
                 [LEFT, RIGHT, BOTTOM, TOP], [LEFT, RIGHT, TOP, BOTTOM],
                 [LEFT, BOTTOM, RIGHT, TOP], [LEFT, BOTTOM, TOP, RIGHT],
                 [TOP, BOTTOM, RIGHT, LEFT], [TOP, BOTTOM, LEFT, RIGHT],
                 [TOP, LEFT, BOTTOM, RIGHT], [TOP, LEFT, RIGHT, BOTTOM],
                 [TOP, RIGHT, BOTTOM, LEFT], [TOP, RIGHT, LEFT, BOTTOM],
                 [BOTTOM, RIGHT, LEFT, TOP], [BOTTOM, RIGHT, TOP, LEFT],
                 [BOTTOM, LEFT, RIGHT, TOP], [BOTTOM, LEFT, TOP, RIGHT],
                 [BOTTOM, TOP, RIGHT, LEFT], [BOTTOM, TOP, LEFT, RIGHT],
                 [RIGHT, LEFT, TOP, BOTTOM], [RIGHT, LEFT, BOTTOM, TOP],
                 [RIGHT, TOP, BOTTOM, LEFT], [RIGHT, TOP, LEFT, BOTTOM],
                 [RIGHT, BOTTOM, LEFT, TOP], [RIGHT, BOTTOM, TOP, LEFT]
                 ];
var TD_SIZE = 16; //in pixels
var rowLength;
var colLength;
var connectedCellsSub = 0;
var rows = []; //the html table as CellInfo instances
var previousDrag = null;
var previousColor;
var lastColor;
var recentBackground = 0;

function CellInfo(td,row,column) {
    this.cell = td;
    this.row = row;
    this.column = column;
    this.borders = TOP + LEFT;
    this.connected = false;
}

CellInfo.prototype.getBorderStyle = function() {
    var result = "";
    if ((this.borders & LEFT) > 0) {
        result +=  "left ";
    }
    if ((this.borders & TOP) > 0) {
        result +=  "top ";
    }
    if ((this.borders & RIGHT) > 0) {
        result +=  "right ";
    }
    if ((this.borders & BOTTOM) > 0) {
        result +=  "bottom ";
    }
    return result;
};
function initializeTable(table) {
    var rowSub;
    var colSub;
    var cell;
    var tableRow;
    //get size of window
    colLength = Math.floor(this.innerWidth * 0.7 / TD_SIZE);
    rowLength = Math.floor(this.innerHeight * 0.7 / TD_SIZE);
    //create the html table
    for (rowSub = 0; rowSub < rowLength; rowSub++) {
        tableRow = table.insertRow();
        rows[rowSub] = [];
        for (colSub = 0; colSub < colLength; colSub++) {
            cell = tableRow.insertCell(colSub);
            rows[rowSub][colSub] = new CellInfo(cell, rowSub, colSub);
            cell.innerHTML = "&nbsp;";
            cell.onclick = alterBackground ;
            cell.onmouseover = mouseOver;
        }
    }
    //last row needs special attention to bottom border
    for (colSub = 0; colSub < colLength; colSub++) {
        rows[rowLength -1][colSub].borders += BOTTOM;
    }
    //rightmost cell in each row needs special attention to the right border
    for (rowSub = 0; rowSub < rowLength; rowSub++) {
        rows[rowSub][colLength -1].borders += RIGHT;
    }

}
function buildTable(table) {
    var random;
    var entrance;
    var exitCell;
    var initRow;
    var initColumn;
    var cellCount;
    var connectedCells;
    var cellSub;
    var oldCell;
    var connectedCell;
    var rowSub;
    var colSub;
    var cellInfo;

    initializeTable(table);
    //pick the left side entrance cell
    random = Math.random();
    entrance = Math.floor(random * rowLength);
    rows[entrance][0].borders = rows[entrance][0].borders - LEFT;
    rows[entrance][0].cell.innerHTML = "E";
    //assign the right side exit cell
    exitCell = rows[rowLength - 1 - entrance][colLength-1];
    exitCell.borders = exitCell.borders - RIGHT;
    exitCell.cell.innerHTML = "E";

    //Pick a starting cell
    initRow = Math.floor(Math.random() * rowLength);
    initColumn = Math.floor(Math.random() * colLength);
    cellCount = rowLength * colLength;
    connectedCells = [rows[initRow][initColumn]];
    rows[initRow][initColumn].connected = true;
    //Loop through all cells, connecting them by removing a border
    //Each pass through this loop connects one more cell to the connected cells
    for (cellSub = 0; cellSub < cellCount - 1; cellSub++) {
        oldCell = connectedCells[connectedCells.length-1];
        connectedCell = connectCell(oldCell);
        if (connectedCell === oldCell) {
            connectedCell = searchForBranch(connectedCells);
            if (connectedCell === null) {
                //Should never get here! Give up and see what it looks like
                oldCell.cell.innerHTML = "X";
                break;
            }
        }
        connectedCells[connectedCells.length] = connectedCell;
    }

    //Add the maze borders to the TD style classes.
    for (rowSub = 0; rowSub < rowLength; rowSub++) {
        for (colSub = 0; colSub < colLength; colSub++) {
            cellInfo = rows[rowSub][colSub];
            cellInfo.cell.className = "c0 " + cellInfo.getBorderStyle();
        }
    }
}

//Search for a cell to branch from the already connected cells
function searchForBranch(connectedCells) {
    var sub;
    var oldCell;
    var connectedCell;
    for (sub = connectedCellsSub; sub < connectedCells.length; sub++) {
        oldCell = connectedCells[sub];
        connectedCell = connectCell(oldCell);
        if (connectedCell !== oldCell) {
            connectedCellsSub = sub;
            return connectedCell;
        }
    }
    //should never get here
    return null;
}

//Try to connect this cell to an adjacent non conected cell
//by removing one of the borders
function connectCell(cell) {
    //direction checking randomly while ignoring already connected cells
    //will result in a random fence as opposed to a random walk
    var permutation = Math.floor(Math.random() * direction.length);
    var candidateCell = cell;
    var sub;
    for (sub = 0; sub < 4; sub++) {
        switch(direction[permutation][sub]) {
            case LEFT:
                if (cell.column > 0) {
                    candidateCell = rows[cell.row][cell.column - 1];
                    if (!candidateCell.connected) {
                        cell.borders = cell.borders - LEFT;
                        candidateCell.connected = true;
                        return candidateCell;
                    }
                }
                break;
            case TOP:
                if (cell.row > 0) {
                    candidateCell = rows[cell.row-1][cell.column];
                    if (!candidateCell.connected) {
                        cell.borders = cell.borders - TOP;
                        candidateCell.connected = true;
                        return candidateCell;
                    }
                }
                break;
            case RIGHT: //stored as missing LEFT in the candidate cell
                if (cell.column < colLength - 1) {
                    candidateCell = rows[cell.row][cell.column + 1];
                    if (!candidateCell.connected) {
                        candidateCell.borders = candidateCell.borders - LEFT;
                        candidateCell.connected = true;
                        return candidateCell;
                    }
                }
                break;
            default: //BOTTOM, stored as missing TOP in the candidate cell
                if (cell.row < rowLength - 1) {
                    candidateCell = rows[cell.row + 1][cell.column];
                    if (!candidateCell.connected) {
                        candidateCell.borders = candidateCell.borders - TOP;
                        candidateCell.connected = true;
                        return candidateCell;
                    }
                }
        }
    }
    //Did not find any adjacent cell to connect
    return cell;
}

//The rest of the file is for the UI
//To paint paths through the maze, Click on a
//cell to color it. Move mouse along connected cells to color the path.
//Click on a colored cell to remove the coloring and move mouse over adjecent
//same colored cells to remove their coloring.

//handler for onclick event
function alterBackground(event) {
    previousDrag = this;
    previousColor  = this.className.split(" ")[0];
    changeBackground(this, true);
    lastColor = this.className.split(" ")[0];
    return true;
}

//handler for onmouseover event
function mouseOver(event) {
    var td = event.currentTarget;
    var tdColorClass = td.className.split(" ")[0];
    if (previousDrag === td || previousDrag === null) {
        return false;
    } else {
        if (isConnected(previousDrag, td)) {
            if (changeBackground(td, false) !== tdColorClass){
                previousDrag = td;
                return true;
            } else {
                previousDrag = null;
                return false;
            }
        } else {
            previousDrag = null;
            return false;
        }
    }
}

function getCellInfo(td) {
    var col = td.cellIndex;
    var row = td.parentElement.rowIndex;
    return rows[row][col];
}

function isConnected(td1, td2) {
    var cell1;
    var cell2;
    var className1;
    var className2;
    var rowDiff;
    var colDiff;
    if (td1 === null) {
        return false;
    }
    cell1 = getCellInfo(td1);
    cell2 = getCellInfo(td2);
    className1 = td1.className;
    className2 = td2.className;
    if (cell1.column === cell2.column) {
        rowDiff = cell1.row - cell2.row;
        if (rowDiff === 1) {
            if (className1.indexOf("top") < 0) {
                return true;
            }
        } else if (rowDiff === -1) {
            if (className2.indexOf("top") < 0) {
                return true;
            }
        }
    } else if (cell1.row === cell2.row) {
        colDiff = cell1.column - cell2.column;
        if (colDiff === 1) {
            if (className1.indexOf("left") < 0) {
                return true;
            }
        } else if (colDiff === -1) {
            if (className2.indexOf("left") < 0) {
                return true;
            }
        }
    }
    return false;
}

function changeBackground(td, isMouseClick) {
    var classNames = td.className.split(" ");
    var className = classNames[0];
    var i;
    if (className !== previousColor) {
        return className;
    }
    if (classNames[0] === "c0") {
        classNames[0] = highlightBackground(td,isMouseClick);
    } else {
        className = previousDrag.className.split(" ")[0];
        if (isMouseClick || classNames[0] === className || className === "c0"){
            classNames[0] = "c0";
        }
    }
    //rebuild className
    className = classNames[0];

    for (i = 1; i < classNames.length; i++) {
        className = className + " " +  classNames[i];
    }
    td.className = className;
    return classNames[0];
}

function highlightBackground(td,isMouseClick){
    var cell = getCellInfo(td);
    var colorStyle = getNeighborColorStyle(cell);
    if (colorStyle ==="c0" && isMouseClick) {
        colorStyle = incrementRecentBackgroundColor(td);
    }
    return colorStyle;
}

function incrementRecentBackgroundColor(td) {
    while (true) {
        recentBackground += 1;
        if (recentBackground > 7) {
            recentBackground = 1;
        }
        if (!isCheatingColor(td)) {
            return "c" + recentBackground;
        }
    }
}

//return true if an unconnected cell has the recentBackground color
//so we don't use an exisitng paths color for a cell that borders
//the path but is not connected
function isCheatingColor (td) {
    var cell = getCellInfo(td);
    var candidateCell = cell;
    var sub;
    var recentColorStyle = "c" + recentBackground;
    var classNames;
    //LEFT
    if (cell.column > 0) {
        candidateCell = rows[cell.row][cell.column -1];
        classNames = candidateCell.cell.className.split(" ");
        if (!isConnected(cell.cell, candidateCell.cell) &&
            classNames[0] === recentColorStyle) {
            return true;
        }
    }
    //TOP
    if (cell.row > 0) {
        candidateCell = rows[cell.row-1][cell.column];
        classNames = candidateCell.cell.className.split(" ");
        if (!isConnected(cell.cell, candidateCell.cell) &&
            classNames[0] === recentColorStyle) {
            return true;
        }
    }
    //RIGHT, stored as missing LEFT in the candidate cell
    if (cell.column < colLength - 1) {
        candidateCell = rows[cell.row][cell.column+1];
        classNames = candidateCell.cell.className.split(" ");
        if (!isConnected(cell.cell, candidateCell.cell) &&
            classNames[0] === recentColorStyle) {
            return true;
        }
    }
    //BOTTOM, stored as missing TOP in the candidate cell
    if (cell.row < rowLength -1) {
        candidateCell = rows[cell.row+1][cell.column];
        classNames = candidateCell.cell.className.split(" ");
        if (!isConnected(cell.cell, candidateCell.cell) &&
            classNames[0] === recentColorStyle) {
            return true;
        }
    }
    return false;
}

//Look for a connected cell that is colored.
//If found, return the style class that colored it
//If multiple connected cells, prefer the lastColor if present
function getNeighborColorStyle(cell) {
    var candidateCell = cell;
    var cellClassNames = cell.cell.className;
    var sub;
    var colorStyle = "c0";
    var classNames;
    if (cell.column > 0  && cellClassNames.indexOf("left") < 0) {
        candidateCell = rows[cell.row][cell.column - 1];
        classNames = candidateCell.cell.className.split(" ");
        if (classNames[0] !== "c0") {
            colorStyle = classNames[0];
            if (colorStyle === lastColor) {
                return colorStyle;
            }
        }
    }
    if (cell.row > 0 && cellClassNames.indexOf("top") < 0) {
        candidateCell = rows[cell.row - 1][cell.column];
        classNames = candidateCell.cell.className.split(" ");
        if (classNames[0] !== "c0") {
            colorStyle = classNames[0];
            if (colorStyle === lastColor) {
                return colorStyle;
            }
        }
    }
    //check RIGHT direction, stored as missing LEFT in the candidate cell
    if (cell.column < colLength - 1) {
        candidateCell = rows[cell.row][cell.column+1];
        if (candidateCell.cell.className.indexOf("left") < 0) {
            classNames = candidateCell.cell.className.split(" ");
            if (classNames[0] !== "c0") {
                colorStyle = classNames[0];
                if (colorStyle === lastColor) {
                    return colorStyle;
                }
            }
        }
    }
    //check BOTTOM direction, stored as missing TOP in the candidate cell
    if (cell.row < rowLength - 1) {
        candidateCell = rows[cell.row+1][cell.column];
        if (candidateCell.cell.className.indexOf("top") < 0) {
            classNames = candidateCell.cell.className.split(" ");
            if (classNames[0] !== "c0") {
                colorStyle = classNames[0];
                if (colorStyle === lastColor) {
                    return colorStyle;
                }
            }
        }
    }
    return colorStyle;
}
