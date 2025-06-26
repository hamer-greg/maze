var standings=[
               
               "Liverpool",
               "Arsenal",
               "Manchester City",
               "Chelsea",
               "Newcastle United",
               "Aston Villa",
               "Nottingham Forest",
               "Brighton & Hove Albion",
               "AFC Bournemouth",
               "Brentford",
               "Fulham",
               "Crystal Palace",
               "Everton",
               "West Ham United",
               "Manchester United",
               "Wolverhampton Wanderers",
               "Tottenham Hotspur",
               "Leicester City",
               "Ipswich Town",
               "Southampton",
"", /* Championship */
               
               "Leeds United",
               "Burnley",
               "Sheffield United",
               "Sunderland",
               "Coventry City",
               "Bristol City",
               "Blackburn Rovers",
               "Millwall",
               " West Bromwich Albion",
               "Middlesbrough",
               "Swansea City",
               "Sheffield Wednesday",
               "Norwich City",
               "Watford",
               "Queens Park Rangers",
               "Portsmouth",
               "Oxford United",
               "Stoke City",
               "Derby County",
               "Preston North End",
               "Hull City",
               "Luton Town",
               "Plymouth Argyle",
               "Cardiff City",
"",/* League 1 */
               
               "Birmingham City",
               "Wrexham",
               "Stockport County",
               "Charlton Athletic",
               "Wycombe Wanderers",
               "Leyton Orient",
               "Reading",
               "Bolton Wanderers",
               "Blackpool",
               "Huddersfield Town",
               "Lincoln City",
               "Barnsley",
               "Rotherham United",
               "Stevenage",
               "Wigan Athletic",
               "Exeter City",
               "Mansfield Town",
               "Peterborough United",
               "Northampton Town",
               "Burton Albion",
               "Crawley Town",
               "Bristol Rovers",
               "Cambridge United",
               "Shrewsbury Town",

"", /* League 2 */
               "Doncaster Rovers",
               "Port Vale",
               "Bradford City",
               "Walsall",
               "AFC Wimbledon",
               "Notts County",
               "Chesterfield",
               "Salford City",
               "Grimsby Town",
               "Colchester United",
               "Bromley",
               "Swindon Town",
               "Crewe Alexandra",
               "Fleetwood Town",
               "Cheltenham Town",
               "Barrow",
               "Gillingham",
               "Harrogate Town",
               "Milton Keynes Dons",
               "Tranmere Rovers",
               "Accrington Stanley",
               "Newport County",
               "Carlisle United",
               "Morecambe",
"", /* National */
               "Barnet",
               "York City",
               "Forest Green Rovers",
               "Rochdale",
               "Oldham Athletic",
               "FC Halifax Town",
               "Southend United",
               "Gateshead",
               "Altrincham",
               "Tamworth",
               "Eastleigh",
               "Hartlepool United",
               "Sutton United",
               "Solihull Moors",
               "Woking",
               "Yeovil Town",
               "Boston United",
               "Aldershot Town",
               "Braintree Town",
               "Dagenham & Redbridge",
               "Wealdstone",
               "Maidenhead United",
               "AFC Fylde",
               "Ebbsfleet United"


];
function genFAhistoryYear(textarea) {
    var wordArray = new Array();
    
    var input=textarea.value;
    wordArray= input.split(/\n+/);
    getTeamList(wordArray);
}
function generateFAhistoryYear(){
    getTeamList(standings);
}
function getTeamList(list) {
    var subscripts = new Array();
    for (var i = 0; i < list.length; i++) {
        subscripts[i] = findSub(list[i].trim());
      
    }
    document.getElementById('pp').innerHTML = subscripts.toString();
}
function findSub(name) {
    
    for (var i=0; i < teamNames.length; i++) {
        if (name == teamNames[i][0]) {
            return i;
        }
    }
    if (name.length == 0) {
        return '" "';
    }
    return name;
}
