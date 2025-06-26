//Javascript name: FA.js
//Date created: 16 July 2019
//Scripter: Greg Hamer
//Version: 0.2
//Contact: hamer.greg@gmail.com
// Note: Permission given to use this script in ANY kind of applications

// External dependencies: none!

//Global variables and constants
//Always add new teams at the bottom of this list; order counts for defining the subscript. Also need to add a class to fa.html when adding new subscripts (teams)to this list
var teamNames = [["AFC Bournemouth", "A.F.C._Bournemouth"], //0,A.F.C. Bournemouth
                 ["AFC Telford United","A.F.C._Telford_United"], //1,
                 ["AFC Wimbledon","AFC_Wimbledon"], //2,
                 ["Aberdare Athletic","Aberdare_Athletic_F.C."], //3,
                 ["Accrington","Accrington_F.C."], //4,
                 ["Accrington Stanley", "Accrington_Stanley_F.C."], //5,Accrington Stanley F.C.
                 ["Aldershot", "Aldershot_F.C."], //6,Aldershot F.C.
                 ["Aldershot Town","Aldershot_Town_F.C."], //7,Aldershot Town F.C.
                 ["Alfreton Town", "Alfreton_Town_F.C."], //8
                 ["Altrincham","Altrincham_F.C."], //9,
                 ["Arsenal","Arsenal_F.C."], //10,Arsenal F.C.
                 ["Ashington", "Ashington_A.F.C."], //11,
                 ["Aston Villa", "Aston_Villa_F.C."], //12,Aston Villa F.C.
                 ["Barnet", "Barnet_F.C."], //13,Barnet F.C.
                 ["Barnsley", "Barnsley_F.C."], //14,Barnsley F.C.
                 ["Barrow","Barrow_A.F.C."], //15,
                 ["Bath City","Bath_City_F.C."], //16,
                 ["Birmingham City", "Birmingham_City_F.C."], //17,Birmingham City F.C.
                 ["Blackburn Rovers", "Blackburn_Rovers_F.C."], //18,Blackburn Rovers F.C.
                 ["Blackpool", "Blackpool_F.C."], //19,Blackpool F.C.
                 ["Bolton Wanderers", "Bolton_Wanderers_F.C."], //20,Bolton Wanderers F.C.
                 ["Bootle","Bootle_F.C."], //21,
                 ["Boreham Wood","Boreham_Wood_F.C."], //22,
                 ["Boston United", "Boston_United_F.C."], //23,Boston United F.C.
                 ["Bournemouth","A.F.C._Bournemouth"], //24,
                 ["Bradford City", "Bradford_City_A.F.C."], //25,Bradford City A.F.C.
                 ["Bradford Park Avenue","Bradford_(Park_Avenue)_A.F.C."], //26,
                 ["Braintree Town","Braintree_Town_F.C."], //27,
                 ["Brentford", "Brentford_F.C."], //28,Brentford F.C.
                 ["Brighton & Hove Albion", "Brighton_%26_Hove_Albion_F.C."], //29,Brighton &amp; Hove Albion F.C.
                 ["Bristol City", "Bristol_City_F.C."], //30,Bristol City F.C.
                 ["Bristol Rovers", "Bristol_Rovers_F.C."], //31,Bristol Rovers F.C.
                 ["Bromley","Bromley_F.C."], //32,
                 ["Burnley", "Burnley_F.C."], //33,Burnley F.C.
                 ["Burton", "Burton_Albion_F.C."], //34,Burton Albion F.C.
                 ["Burton Albion", "Burton_Albion_F.C."], //35,
                 ["Burton United",""], //36,
                 ["Burton Wanderers","Burton_Wanderers_F.C."], //37,
                 ["Bury", "Bury_F.C."], //38,Bury F.C.
                 ["Cambridge United", "Cambridge_United_F.C."], //39,Cambridge United F.C.
                 ["Canvey Island","Canvey_Island_F.C."], //40,
                 ["Cardiff City", "Cardiff_City_F.C."], //41,Cardiff City F.C.
                 ["Carlisle United","Carlisle_United_F.C."], //42,
                 ["Charlton Athletic", "Charlton_Athletic_F.C."], //43,Charlton Athletic F.C.
                 ["Chelsea", "Chelsea_F.C."], //44,Chelsea F.C.
                 ["Cheltenham Town", "Cheltenham_Town_F.C."], //45,Cheltenham Town F.C.
                 ["Chester","Chester_F.C."], //46,
                 ["Chester City", "Chester_City_F.C."], //47,Chester City F.C.
                 ["Chesterfield", "Chesterfield_F.C."], //48,Chesterfield F.C.
                 ["Colchester United", "Colchester_United_F.C."], //49,Colchester United F.C.
                 ["Coventry City", "Coventry_City_F.C."], //50,Coventry City F.C.
                 ["Crawley Town","Crawley_Town_F.C."], //51,
                 ["Crewe Alexandra", "Crewe_Alexandra_F.C."], //52,Crewe Alexandra F.C.
                 ["Crystal Palace", "Crystal_Palace_F.C."], //53,Crystal Palace F.C.
                 ["Dagenham & Redbridge", "Dagenham_%26_Redbridge_F.C."], //54,Dagenham &amp; Redbridge F.C.
                 ["Darlington", "Darlington_F.C."], //55,Darlington F.C.
                 ["Dartford", "Dartford_F.C."], //56,
                 ["Darwen", "Darwen_F.C."], //57,
                 ["Derby County", "Derby_County_F.C."], //58,Derby County F.C.
                 ["Doncaster Rovers", "Doncaster_Rovers_F.C."], //59,Doncaster Rovers F.C.
                 ["Dover Athletic", "Dover_Athletic_F.C."], //60,
                 ["Durham City", "Durham_City_A.F.C."], //61,
                 ["Eastbourne Borough","Eastbourne_Borough_F.C."], //62,
                 ["Eastleigh","Eastleigh_F.C."], //63,
                 ["Ebbsfleet United", "Ebbsfleet_United_F.C."], //64,Ebbsfleet United F.C.
                 ["Everton", "Everton_F.C."], //65,Everton F.C.
                 ["Exeter City", "Exeter_City_F.C."], //66,Exeter City F.C.
                 ["Farnborough Town","Farnborough_Town_F.C."], //67,Farnborough Town
                  ["Fleetwood Town","Fleetwood_Town_F.C."], //68,
                  ["Forest Green Rovers", "Forest_Green_Rovers_F.C."], //69,Forest Green Rovers F.C.
                  ["Fulham", "Fulham_F.C."], //70,Fulham F.C.
                  ["Fylde","A.F.C._Fylde"], //71,
                  ["Gainsborough Trinity","Gainsborough_Trinity_F.C."], //72,
                  ["Gateshead","Gateshead_F.C."], //73,
                  ["Gillingham", "Gillingham_F.C."], //74,Gillingham F.C.
                  ["Glossop North End","Glossop_North_End_A.F.C."], //75,
                  ["Gravesend","Ebbsfleet_United_F.C.",64], //76,
                  ["Gravesend & Northfleet", "Ebbsfleet_United_F.C.",64], //77,Gravesend &amp; Northfleet F.C.
                  ["Grays Athletic","Grays_Athletic_F.C."], //78,
                  ["Grimsby Town", "Grimsby_Town_F.C."], //79,Grimsby Town F.C.
                  ["Guiseley","Guiseley_A.F.C."], //80,
                  ["Halifax Town", "Halifax_Town_A.F.C.",192], //81,Halifax Town A.F.C.
                  ["Harrogate Town","Harrogate_Town_A.F.C."], //82,
                  ["Hartlepool United", "Hartlepool_United_F.C."], //83,Hartlepool United F.C.
                  ["Hayes & Yeading United","Hayes_%26_Yeading_United_F.C."], //84,
                  ["Hereford United", "Hereford_United_F.C."], //85,Hereford United F.C.
                  ["Histon","Histon_F.C."], //86,
                  ["Huddersfield Town", "Huddersfield_Town_A.F.C."], //87,Huddersfield Town A.F.C.
                  ["Hull City", "Hull_City_A.F.C."], //88,Hull City A.F.C.
                  ["Hyde","Hyde_United_F.C."], //89,
                  ["Ipswich Town", "Ipswich_Town_F.C."], //90,Ipswich Town F.C.
                  ["Kettering Town","Kettering_Town_F.C."], //91,
                  ["Kidderminster Harriers", "Kidderminster_Harriers_F.C."], //92,Kidderminster Harriers F.C.
                  ["Leeds City","Leeds_City_F.C."], //93,
                  ["Leeds United", "Leeds_United_F.C."], //94,Leeds United F.C.
                  ["Leicester City", "Leicester_City_F.C."], //95,Leicester City F.C.
                  ["Leigh RMI", "Leigh_RMI_F.C."], //96,Leigh RMI F.C.
                  ["Leyton Orient", "Leyton_Orient_F.C."], //97,Leyton Orient F.C.
                  ["Lincoln City", "Lincoln_City_F.C."], //98,Lincoln City F.C.
                  ["Liverpool", "Liverpool_F.C."], //99,Liverpool F.C.
                  ["Loughborough","Loughborough_F.C."], //100,
                  ["Luton Town", "Luton_Town_F.C."], //101,Luton Town F.C.
                  ["Macclesfield Town", "Macclesfield_Town_F.C."], //102,Macclesfield Town F.C.
                  ["Maidenhead United","Maidenhead_United_F.C."], //103,
                  ["Maidstone United","Maidstone_United_F.C._(1897)"], //104,
                  ["Manchester City", "Manchester_City_F.C."], //105,Manchester City F.C.
                  ["Manchester United", "Manchester_United_F.C."], //106,Manchester United F.C.
                  ["Mansfield Town", "Mansfield_Town_F.C."], //107,Mansfield Town F.C.
                  ["Margate", "Margate_F.C."], //108,Margate F.C.
                  ["Merthyr Town","Merthyr_Town_F.C."], //109,
                  ["Middlesbrough", "Middlesbrough_F.C."], //110,Middlesbrough F.C.
                  ["Middlesbrough Ironopolis","Middlesbrough_Ironopolis_F.C."], //111,
                  ["Millwall", "Millwall_F.C."], //112,Millwall F.C.
                  ["Milton Keynes Dons", "Milton_Keynes_Dons_F.C."], //113,Milton Keynes Dons F.C.
                  ["Morecambe", "Morecambe_F.C."], //114,Morecambe F.C.
                  ["Nelson","Nelson_F.C."], //115,
                  ["New Brighton","New_Brighton_A.F.C."], //116,
                  ["New Brighton Tower","New_Brighton_Tower_F.C."], //117,
                  ["Newcastle United", "Newcastle_United_F.C."], //118,Newcastle United F.C.
                  ["Newport County","Newport_County_A.F.C."], //119,
                  ["Newton Heath","Manchester_United_F.C.",106], //120,
                  ["Northampton","Northampton_Town_F.C."], //121 not used, same as Northampton Town
                  ["Northampton Town", "Northampton_Town_F.C."], //122,Northampton Town F.C.
                  ["Northwich Victoria", "Northwich_Victoria_F.C."], //123,Northwich Victoria F.C.
                  ["Norwich City", "Norwich_City_F.C."], //124,Norwich City F.C.
                  ["Nottingham Forest", "Nottingham_Forest_F.C."], //125,Nottingham Forest F.C.
                  ["Notts County", "Notts_County_F.C."], //126,Notts County F.C.
                  ["Nuneaton Town","Nuneaton_Borough_F.C."], //127,
                  ["Oldham Athletic", "Oldham_Athletic_A.F.C."], //128,Oldham Athletic A.F.C.
                  ["Oxford United", "Oxford_United_F.C."], //129,Oxford United F.C.
                  ["Peterborough United", "Peterborough_United_F.C."], //130,Peterborough United F.C.
                  ["Plymouth Argyle", "Plymouth_Argyle_F.C."], //131,Plymouth Argyle F.C.
                  ["Port Vale", "Port_Vale_F.C."], //132,Port Vale F.C.
                  ["Portsmouth", "Portsmouth_F.C."], //133,Portsmouth F.C.
                  ["Preston North End", "Preston_North_End_F.C."], //134,Preston North End F.C.
                  ["Queens Park Rangers", "Queens_Park_Rangers_F.C."], //135,Queens Park Rangers F.C.
                  ["Reading", "Reading_F.C."], //136,Reading F.C.
                  ["Rochdale", "Rochdale_A.F.C."], //137,Rochdale A.F.C.
                  ["Rotherham Town","Rotherham_Town_F.C._(1878)"], //138,
                  ["Rotherham United", "Rotherham_United_F.C."], //139,Rotherham United F.C.
                  ["Rushden & Diamonds", "Rushden_%26_Diamonds_F.C."], //140,Rushden &amp; Diamonds F.C.
                  ["Salisbury City","Salisbury_City_F.C."], //141,
                  ["Scarborough", "Scarborough_F.C."], //142,Scarborough F.C.
                  ["Scunthorpe United", "Scunthorpe_United_F.C."], //143,Scunthorpe United F.C.
                  ["Sheffield United", "Sheffield_United_F.C."], //144,Sheffield United F.C.
                  ["Sheffield Wednesday", "Sheffield_Wednesday_F.C."], //145,Sheffield Wednesday F.C.
                  ["Shrewsbury Town", "Shrewsbury_Town_F.C."], //146,Shrewsbury Town F.C.
                  ["Solihull Moors","Solihull_Moors_F.C."], //147,
                  ["South Shields","Gateshead_F.C.", 73], //148,
                  ["Southampton", "Southampton_F.C."], //149,Southampton F.C.
                  ["Southend United", "Southend_United_F.C."], //150,Southend United F.C.
                  ["Southport","Southport_F.C."], //151,
                  ["Stafford Rangers","Stafford_Rangers_F.C."], //152,
                  ["Stalybridge Celtic","Stalybridge_Celtic_F.C."], //153,
                  ["Stevenage", "Stevenage_F.C."], //154,Stevenage F.C.
                  ["Stevenage Borough", "Stevenage_Borough_F.C.", 154], //155,Stevenage Borough F.C.
                  ["Stockport County", "Stockport_County_F.C."], //156,Stockport County F.C.
                  ["Stoke City", "Stoke_City_F.C."], //157,Stoke City F.C.
                  ["Sunderland", "Sunderland_A.F.C."], //158,Sunderland A.F.C.
                  ["Sutton United","Sutton_United_F.C."], //159,
                  ["Swansea City", "Swansea_City_A.F.C."], //160,Swansea City A.F.C.
                  ["Swindon Town", "Swindon_Town_F.C."], //161,Swindon Town F.C.
                  ["Tamworth", "Tamworth_F.C."], //162,Tamworth F.C.
                  ["Telford United", "Telford_United_F.C."], //163,Telford United F.C.
                  ["Thames","Thames_A.F.C."], //164,
                  ["Torquay United", "Torquay_United_F.C."], //165,Torquay United F.C.
                  ["Tottenham Hotspur", "Tottenham_Hotspur_F.C."], //166,Tottenham Hotspur F.C.
                  ["Tranmere Rovers", "Tranmere_Rovers_F.C."], //167,Tranmere Rovers F.C.
                  ["Walsall","Walsall_F.C."], //168,
                  ["Watford", "Watford_F.C."], //169,Watford F.C.
                  ["Welling United","Welling_United_F.C."], //170,
                  ["West Bromwich Albion", "West_Bromwich_Albion_F.C."], //171,West Bromwich Albion F.C.
                  ["West Ham United", "West_Ham_United_F.C."], //172,West Ham United F.C.
                  ["Weymouth","Weymouth_F.C."], //173,
                  ["Wigan Athletic", "Wigan_Athletic_F.C."], //174,Wigan Athletic F.C.
                  ["Wigan Borough","Wigan_Borough_F.C."], //175,
                  ["Wimbledon","Wimbledon_F.C.",113], //176,
                  ["Woking", "Woking_F.C."], //177,Woking F.C.
                  ["Wolverhampton Wanderers", "Wolverhampton_Wanderers_F.C."], //178,Wolverhampton Wanderers F.C.
                  ["Workington","Workington_A.F.C."], //179,
                  ["Wrexham", "Wrexham_F.C."], //180,Wrexham F.C.
                  ["Wycombe Wanderers", "Wycombe_Wanderers_F.C."], //181,Wycombe Wanderers F.C.
                  ["Yeovil Town", "Yeovil_Town_F.C."], //182,Yeovil Town F.C.
                  ["York City","York_City_F.C."], //183
                  ["Droylsden","Droylsden_F.C."], //184
                  ["Farsley Celtic","Farsley_Celtic_F.C."], //185
                  ["Lewes","Lewes_F.C."], //186
                  ["XXX",""], //187
                  ["North Ferriby United","North_Ferriby_United_A.F.C."], //188
                  ["Havant & Waterlooville","Havant_%26_Waterlooville_F.C."], //189
                  ["Salford City","Salford_City_F.C."], //190
                  ["St Albans City","St_Albans_City_F.C."], //191
                  ["FC Halifax Town","FC_Halifax_Town"], //192
                  ["AFC Fylde","AFC_Fylde"], //193
                  ["Chorley","Chorley"], //194
                  ["Hednesford Town","Hednesford_Town_F.C."],//195
                  ["Hayes","Hayes_F.C."],//196
                  ["Slough Town","Slough Town_F.C."],//197
                  ["Bromsgrove Rovers","Bromsgrove Rovers_F.C."],//198
                  ["Leek Town","Leek_Town_F.C."], //199
                  ["Kingstonian","Kingstonian_F.C."], //200
                  ["Nuneaton Borough","Nuneaton_Borough_F.C."],//201
                  ["Runcorn","Runcorn_F.C._Halton"],//202
                  ["Merthyr Tydfil","Merthyr_Tydfil_F.C."],//203
                  ["Witton Albion","Witton Albion_F.C."],//204
                  ["Redbridge Forest","Redbridge Forest_F.C.",],//205
                  ["Fisher Athletic","Fisher Athletic_F.C."],//206
                  ["Enfield", "Enfield_F.C."],//207
                  ["Aylesbury United","Aylesbury United_F.C."],//208
                  ["Wealdstone","Wealdstone_F.C."],//209
                  ["Dagenham","Dagenham_F.C."],//210
                  ["Frickley Athletic","Frickley Athletic_F.C."],//211
                  ["Kings Lynn Town","Kings Lynn Town_F.C."], //212
                  ["Dover","Dover_F.C."], //213
                  ["Maidstone United","Maidstone_United_F.C."], //214
                  ["Dorking Wanderers","Dorking_Wanderers_F.C."], //215
                  ["Bootle F.C.","Bootle_F.C.(1879)"], //216,
                  ["The Wednesday", "Sheffield_Wednesday_F.C.",145], //217,Sheffield Wednesday F.C.
                 ["Oxford City", "Oxford_City_F.C."], //218,Oxford City F.C.

                 ];
//relegations and promotions (causing names to be in bold) by year. values are row subscripts to be shown in bold font, from earliest year to latest year
var relegations = [
                  [1,],
                  [1,],
                  [1,],
                  [1,],
                  [1,14,19,20,],
                  [1,15,16,18,19,],
                  [1,16,18,],
                  [1,15,18,],
                  [1,16,18,],
                  [1,18,19,],
                  [1,17,18,20,21,],
                  [1,17,18,20,21,],
                  [1,17,18,20,21,],
                  [1,17,18,20,21,],
                  [1,17,18,20,21,],
                  [1,17,18,20,21,],
                  [1,20,21,],
                  [1,19,20,22,23,],
                  [1,19,20,22,23,],
                  [1,19,20,22,23,],
                  [1,19,20,22,23,],
                  [1,19,20,22,23,],
                  [1,19,20,22,23,],
                  [1,19,20,22,23,],
                  [1,19,20,22,23,],
                  [1,19,20,22,23,],
                  [1,20,22,23,26,],
                  [1,21,22,24,25,44,45,],
                  [1,21,22,24,25,45,47,],
                  [1,21,22,24,25,44,45,47,68,],
                  [1,21,22,24,25,44,45,47,57,68,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,91,],
                  [1,21,22,24,25,44,45,47,67,70,],
                  [1,21,22,24,25,44,45,47,68,70,],
                  [1,21,22,24,25,44,45,47,70,91,],
                  [1,21,22,24,25,44,45,47,68,90,],
                  [1,21,22,24,25,44,45,47,69,90,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,91,],
                  [1,21,22,24,25,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,],
                  [1,21,22,24,25,44,45,47,70,72,],
                  [1,21,22,24,25,44,45,47,72,],
                  [1,21,22,24,25,44,45,47,72,],
                  [1,21,22,24,25,44,45,47,72,],
                  [1,21,22,24,25,44,45,47,72,],
                  [1,21,22,24,25,44,45,47,72,],
                  [1,21,22,24,25,44,45,47,72,],
                  [1,21,22,24,25,44,45,47,59,60,61,62,63,64,65,66,67,68,69,70,72,84,85,86,87,88,89,90,91,92,93,94,95,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,93,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,95,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,93,],
                  [1,21,22,24,25,44,45,47,48,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,95,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,94,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,],
                  [1,20,21,22,24,25,43,44,45,47,48,49,67,68,69,70,72,73,74,77,95,97,114,117,118,],
                  [1,18,19,20,21,23,24,25,43,44,45,47,48,49,67,68,69,70,72,73,74,77,95,97,116,117,118,],
                  [1,18,19,20,22,23,24,43,44,45,47,48,49,67,68,69,70,72,73,74,77,95,97,117,118,],
                  [1,18,19,20,22,23,27,43,44,45,47,48,49,67,68,69,70,72,73,74,77,95,97,116,117,118,],
                  [1,19,20,22,23,24,25,44,45,47,48,49,51,68,69,70,72,73,74,75,78,97,117,118,],
                  [1,20,21,22,24,25,29,45,46,47,49,50,54,69,70,71,72,74,75,76,77,97,117,118,],
                  [1,20,21,22,24,25,28,45,46,47,49,50,52,69,70,71,72,74,75,76,77,95,97,117,118,],
                  [1,20,21,22,24,25,27,45,46,47,49,50,54,69,70,71,72,74,75,76,77,117,118,],
                  [1,19,20,21,22,24,26,44,45,46,47,49,53,68,69,70,71,72,74,75,76,116,117,118,],
                  [1,18,19,20,22,23,26,43,44,45,47,48,52,67,68,69,70,72,73,74,75,117,118,],
                  [1,18,19,20,22,23,27,43,44,45,47,48,52,67,68,69,70,72,73,74,75,95,97,116,117,118,],
                  [1,18,19,20,22,23,25,43,44,45,47,48,49,67,68,69,70,72,73,74,75,95,97,104,117,118,],
                  [1,18,19,20,22,23,26,43,44,45,47,48,49,67,68,69,70,72,73,74,75,95,97,115,117,118,],
                  [1,18,19,20,22,23,24,43,44,45,47,48,49,67,68,69,70,72,73,74,76,95,97,116,117,118,],
                  [1,18,19,20,22,23,24,43,44,45,47,48,50,67,68,69,70,72,73,74,78,95,97,116,117,118,],
                  [1,18,19,20,22,23,26,43,44,45,47,48,51,67,68,69,70,72,73,74,75,95,97,116,117,118,],
                  [1,18,19,20,22,23,26,43,44,45,47,48,52,67,68,69,70,72,73,74,75,94,95,97,116,117,118,],
                  [1,18,19,20,22,23,27,43,44,45,47,48,50,67,68,69,70,72,73,74,75,94,95,97,99,108,112,], //2003
                  [1,18,19,20,22,23,27,43,44,45,47,48,51,67,68,69,70,72,73,74,75,94,95,97,99,115,117,118,],
                  [1,18,19,20, 22,23,24,43,44,45, 47,48,51,67,68,69,70, 72,73,74,76,94,95, 97,98,110,117,], //2005
                  [1,18,19,20, 22,23,24,43,44,45, 47,48,49,67,68,69,70, 72,73,74,77,94,95, 97,99,118,119,120,],//2006
                  [1,18,19,20, 22,23,24,43,44,45, 47,48,49,67,68,69,70, 72,73,74,75,94,95, 97,100,116,118,119,120,], //2007
                  [1,18,19,20,22,23,26,43,44,45,47,48,52,67,68,69,70,72,73,74,76,94,95,97,100,117,118,119,120,],
                  [1,18,19,20,22,23,27,43,44,45,47,48,49,67,68,69,70,72,73,74,75,78,94,95,97,99,108,118,119,],
                  [1,18,19,20,22,23,24,43,44,45,47,48,50,67,68,69,70,72,73,74,77,94,95,97,98,118,119,120,],
                  [1,18,19,20,22,23,24,43,44,45,47,48,50,67,68,69,70,72,73,74,78,94,95,97,100,117,118,119,120,],
                  [1,18,19,20,22,23,26,43,44,45,47,48,50,67,68,69,70,72,73,74,78,94,95,97,99,117,118,119,120,],
                  [1,18,19,20,22,23,25,43,44,45,47,48,50,67,68,69,70,72,73,74,75,94,95,97,98,108,116,119,120,],
                  [1,18,19,20,22,23,24,43,44,45,47,48,49,67,68,69,70,72,73,74,76,94,95,97,98,117,118,119,120,],
                  [1,18,19,20,22,23,25,43,44,45,47,48,52,67,68,69,70,72,73,74,78,94,95,97,100,117,118,119,120,],
                  [1,18,19,20,22,23,26,43,44,45,47,48,52,67,68,69,70,72,73,74,78,94,95,97,99,117,118,119,120,],
                  [1,18,19,20,22,23,24,43,44,45,47,48,50,67,68,69,70,72,73,74,77,94,95,97,98,117,118,119,120,],
                  [1,18,19,20,22,23,26,43,44,45,47,48,49,67,68,69,70,72,73,74,77,94,95,97,99,113,118,119,120,],
                  [1,18,19,20,22,23,25,43,44,45,47,48,49,67,68,69,71,72,73,77,94,96,97,117,118,119,],
                  [1,18,19,20, 22,23,24,43,44,45, 47,48,49,67,68,69,70, 72,73,74,75,94,95, 97,100,119,],
                  [1,18,19,20, 22,23,25,43,44,45, 47,48,51,67,68,69,70, 72,73,74,76,94,95, 97,102,117,118,119,],
                  [1,18,19,20, 22,23,24,43,44,45, 47,48,49,67,68,69,70, 72,73,74,76,94,95, 97,98,117,118,119,120],
                  [1,18,19,20, 22,23,25,43,44,45, 47,48,51,67,68,69,70, 72,73,74,78,94,95, 97,99,117,118,119,120],
                  [1,18,19,20, 22,23,25,43,44,45, 47,48,50,67,68,69,70, 72,73,74,76,94,95, 97,101,117,118,119,120],
                ];
  //When the urls used by wikipedia change, need to add an entry.
  //Next chronological entry overrides previous chronological entry
  var urls = [
              ["1888", ["",""]],
              ["1892", ["1st Div.","#First_Division"],["2nd Div.","#Second_Division"]],
              ["1914", ["1st Div.","#Football_League_First_Division"],["2nd Div.","#Football_League_Second_Division"]],
              ["1920", ["1st Div.","#First_Division"],["2nd Div.","#Second_Division"],["3rd Div.","#Third_Division"]],
              ["1921", ["1st Div.","#First_Division"],["2nd Div.","#Second_Division"],["3rd Div. North","#Third_Division_North"],["3rd Div. South","#Third_Division_South"]],
              ["1958", ["1st Div.","#First_Division"],["2nd Div.","#Second_Division"],["3rd Div.","#Third_Division"],["4th Div.","#Fourth_Division"]],
              ["1986", ["1st Div.","#First_Division"],["2nd Div.","#Second_Division"],["3rd Div.","#Third_Division"],["4th Div.","#Fourth_Division"],["Conference","#Final_league_table"]],
              ["1992", ["Premier","#FA_Premier_League"],["Div. One","#League_Division_One"],["Div. Two","#League_Division_Two"],["Div. Three","#League_Division_Three"],["Conference","#Final_league_table"]],
              ["1993", ["Premier","#FA_Premiership"],["Div. One","#League_Division_One"],["Div. Two","#League_Division_Two"],["Div. Three","#League_Division_Three"],["Conference","#Final_league_table"]],
              ["1994", ["Premier","#FA_Premier_League"],["Div. One","#First_Division"],["Div. Two","#Second_Division"],["Div. Three","#Third_Division"],  ["Conference","#Final_league_table"]],
              ["1995", ["Premier","#Premiership_2"],    ["Div. One","#Division_One_2"],["Div. Two","#Division_Two_2"], ["Div. Three","#Division_Three_2"],["Conference","#Final_league_table"]],
              ["1996", ["Premier","#FA_Premier_League"],["Div. One","#First_Division"],["Div. Two","#Second_Division"],["Div. Three","#Third_Division"],["Conference","#Final_league_table"]],
              ["1998", ["Premier","#FA_Premier_League"],["Div. One","#Division_One_2"],["Div. Two","#Division_Two_2"],["Div. Three","#Division_Three_2"],["Conference","#Final_league_table"]],
              ["1999", ["Premier","#FA_Premier_League"],["Div. One","#Football_League_Division_One"],["Div. Two","#Football_League_Division_Two"],["Div. Three","#Football_League_Division_Three"],["Conference","#Final_league_table"]],
              ["2000", ["Premier","#FA_Premier_League"],["Div. One","#Football_League_First_Division"],["Div. Two","#Football_League_Second_Division"],["Div. Three","#Football_League_Third_Division"],["Conference","#Final_league_table"]],
              ["2001", ["Premier","#FA_Premier_League"],["Div. One","#First_Division"],["Div. Two","#Second_Division"],["Div. Three","#Third_Division"],["Conference","#Final_league_table"]],
              ["2002", ["Premier","#FA_Premier_League"],["Div. One","#Football_League_First_Division"],["Div. Two","#Football_League_Second_Division"],["Div. Three","#Football_League_Third_Division"],["Conference","#Final_league_table"]],
              ["2004", ["Premier","#FA_Premier_League"],["Championship","#Football_League_Championship"],["League One","#Football_League_One"],["League Two","#Football_League_Two"],["Conference","#League_table"]],
              ["2005", ["Premier","#Premier_League"],["Championship","#Football_League_Championship"],["League One","#Football_League_One"],["League Two","#Football_League_Two"],["Conference","#League_table"]],
              ["2012", ["Premier","#Premier_League"],["Championship","#Championship"],["League One","#League_One"],["League Two","#League_Two"],["Conference","#League_table"]],
              ["2014", ["Premier","#Premier_League"],["Championship","#Football_League_Championship"],["League One","#Football_League_One"],["League Two","#Football_League_Two"],["Conference","#League_table"]],
              ["2015", ["Premier","#Premier_League"],["Championship","#Football_League_Championship"],["League One","#Football_League_One"],["League Two","#Football_League_Two"],["National","#National_League_Top_Division"]],
              ["2016", ["Premier","#Premier_League"],["Championship","#Championship"],["League One","#League_One"],["League Two","#League_Two"],["National","#National_League_Top_Division"]],
              ["2020", ["Premier","#Premier_League"],["Championship","#Championship"],["League One","#League_One"],["League Two","#League_Two"],["National","#National_League"]],
  ];

// values are year followed by teamName subscripts. Add team names to SeasonAdd.js and use seasonAdd.html to generate the next years entry to this list
var faHistory = [
    ["1888",134,12,178,18,20,171,4,65,33,58,126,157,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1889",134,65,18,178,171,4,58,12,20,126,33,157,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1890",65,134,126,178,20,18,158,33,12,4,58,171,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1891",158,134,20,12,65,178,33,126,18,58,4,171,157,57,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1892",158,134,65,12,20,33,157,171,18,125,178,217,58,126,4,120," ",
            17,144,57,79,105,36,123,21,98,52,132,168,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1893",12,158,58,18,33,65,125,171,178,144,157,217,20,134,57,120," ",
            99,17,126,118,79,36,132,98,10,168,111,52,105,138,123,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1894",158,65,12,134,18,144,125,217,33,20,178,17,171,157,58,99," ",
            38,126,120,95,79,57,37,10,105,118,36,138,98,168,132,52,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1895",12,58,65,20,158,157,217,18,134,33,38,144,125,178,17,171," ",
            99,105,79,37,118,106,10,95,57,126,36,100,98,132,138,52,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1896",12,144,58,134,99,217,65,20,38,178,125,171,157,18,158,33," ",
            126,106,79,17,118,105,72,19,95,10,57,168,100,36,37,98,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1897",144,158,178,65,217,12,171,125,99,58,20,134,126,38,18,157," ",
            33,118,105,106,10,17,95,101,72,168,19,79,36,98,57,100,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1898",12,99,33,65,126,18,158,178,58,38,125,157,118,171,134,144,20,217," ",
            105,75,95,106,117,168,10,17,132,79,14,98,36,72,101,19,100,57,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1899",12,144,158,178,118,58,105,125,157,99,65,38,171,18,126,134,33,75," ",
            217,20,17,106,95,79,48,10,98,117,132,168,72,110,36,14,101,100,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1900",99,158,126,125,38,118,65,217,18,20,105,58,178,144,12,157,134,171," ",
            79,17,33,117,75,110,10,98,132,106,95,19,72,48,14,168,156,36,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1901",158,65,118,18,125,58,38,12,217,144,99,20,126,178,79,157,17,105," ",
            171,110,134,10,98,30,59,75,33,36,14,132,19,95,106,48,156,72,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1902",217,12,158,144,99,157,171,38,58,125,178,65,110,118,126,18,79,20," ",
            105,17,10,30,106,48,134,14,132,98,75,72,36,19,95,59,156,33,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1903",217,105,65,118,12,158,144,178,125,110,17,38,126,58,18,157,99,171," ",
            134,10,106,30,33,79,20,14,72,25,48,98,132,36,19,156,75,95,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1904",118,65,105,12,158,144,17,134,217,10,58,157,18,178,110,125,38,126," ",
            99,20,106,30,48,72,14,25,98,171,33,75,79,95,19,132,36,59,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1905",99,134,217,118,105,20,17,12,18,157,65,10,144,158,58,126,38,110,125,178," ",
            30,106,44,171,88,93,95,79,33,156,25,14,98,19,72,75,132,48,36,97,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1906",118,30,65,144,12,20,10,106,17,158,110,18,217,134,99,38,105,126,58,157," ",
            125,44,95,171,25,178,33,14,88,93,79,156,19,72,75,132,97,48,98,36,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1907",106,12,105,118,217,110,38,99,125,30,65,134,44,10,18,158,144,126,20,17," ",
            25,95,128,70,171,58,33,88,178,157,72,93,156,97,19,14,75,79,48,98,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1908",118,65,158,18,217,10,12,30,110,134,44,144,106,125,126,99,38,25,105,95," ",
            20,166,171,88,58,128,178,75,72,70,17,93,79,33,97,26,14,156,48,19,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1909",12,99,18,118,106,144,25,158,126,65,217,134,38,125,166,30,110,10,44,20," ",
            105,128,88,58,95,75,70,178,14,26,171,19,156,33,98,97,93,72,79,17,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1910",106,12,158,65,25,217,128,118,144,10,126,18,99,134,166,110,105,38,30,125," ",
            171,20,44,97,88,58,19,33,178,70,93,26,87,75,95,17,156,72,14,98,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1911",18,65,118,20,217,12,110,158,171,10,25,166,106,144,105,126,99,128,134,38," ",
            58,44,33,97,178,14,88,70,79,95,26,17,30,19,125,156,87,75,93,72,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1912",158,12,217,106,18,105,58,20,128,171,65,99,25,118,144,110,166,44,126,10," ",
            134,33,17,14,87,93,79,98,70,178,38,88,26,97,95,30,125,75,156,19,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1913",18,12,110,128,171,20,158,44,25,144,118,33,105,106,65,99,166,217,134,58," ",
            126,26,10,93,14,97,88,30,178,38,70,156,87,17,79,19,75,95,98,125,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1914",65,128,18,33,105,144,217,158,26,171,25,110,99,12,118,126,20,106,44,166," ",
            58,134,14,178,10,17,88,87,97,19,38,70,30,156,93,98,79,125,95,75,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1919",171,33,44,99,158,20,105,118,12,10,26,106,110,144,25,65,128,58,134,18,126,217," ",
            166,87,17,19,38,70,172,30,148,157,88,14,132,95,97,156,139,125,178,50,98,79,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1920",33,105,20,99,118,166,65,110,10,12,18,158,106,171,25,134,87,44,128,144,58,26," ",
            17,41,30,19,172,126,97,148,70,217,38,95,88,94,178,14,132,125,139,157,50,156," ",
            53,149,135,161,160,169,112,109,101,31,131,133,79,122,119,124,150,29,66,136,28,74,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1921",99,166,33,41,12,20,118,110,44,105,144,158,171,87,18,134,10,17,128,65,25,106," ",
            125,157,14,172,88,148,70,94,95,217,38,58,126,53,97,139,178,132,19,50,26,30," ",
            156,55,79,83,5,52,153,168,151,11,61,180,48,98,15,115,175,167,81,137," ",
            149,131,133,101,135,161,169,3,28,160,109,112,136,31,124,43,122,74,29,119,66,150,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1922",99,158,87,118,65,12,171,105,41,144,10,166,20,18,33,134,17,110,44,125,157,128," ",
            126,172,95,106,19,38,94,217,14,70,149,88,148,58,25,53,132,50,97,156,139,178," ",
            115,26,168,48,175,52,81,5,55,180,153,137,98,79,83,167,151,15,11,61," ",
            30,131,160,29,101,112,133,122,161,169,135,43,31,28,150,74,109,124,136,66,3,119,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1923",87,41,158,20,144,12,65,18,118,126,105,99,172,17,166,171,33,134,10,125,44,110," ",
            94,38,58,19,149,157,128,217,148,97,14,95,156,106,53,132,88,25,50,70,115,30," ",
            178,137,48,139,26,55,151,11,59,175,79,167,5,81,61,180,168,116,98,52,83,15," ",
            133,131,112,160,29,161,101,122,31,119,124,3,109,43,74,66,28,136,150,169,24,135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1924",87,171,20,99,38,118,158,17,126,105,41,166,172,144,12,18,65,94,33,10,134,125," ",
            95,106,58,133,44,178,149,132,148,88,97,70,110,217,14,25,19,128,156,157,53,50," ",
            55,115,116,151,26,137,48,98,81,11,175,79,61,15,52,180,5,59,168,83,167,139," ",
            160,131,30,161,112,119,66,29,122,150,169,124,74,136,43,101,31,3,135,24,28,109,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1925",87,10,158,38,144,12,99,20,106,118,65,18,171,17,166,41,95,172,94,33,105,126," ",
            217,58,44,178,160,19,128,132,148,110,133,134,88,149,55,25,125,14,70,97,157,156," ",
            79,26,137,48,81,83,167,115,11,59,52,116,61,139,98,50,175,5,180,151,168,15," ",
            136,131,112,30,29,161,101,24,3,74,150,122,53,109,169,124,119,28,31,66,43,135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1926",118,87,158,20,33,172,95,144,99,12,10,58,166,41,106,217,17,18,38,65,94,171," ",
            110,133,105,44,125,134,88,132,19,128,14,160,149,136,178,126,79,70,148,97,55,25," ",
            157,137,26,81,115,156,48,59,167,116,98,151,180,168,52,11,83,175,139,61,5,15," ",
            30,131,112,29,161,53,24,101,119,31,28,66,43,135,50,124,109,122,150,74,169,3,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1927",65,87,95,58,38,41,20,12,118,10,17,18,144,217,158,99,172,106,33,133,166,110," ",
            105,94,44,134,157,160,128,171,132,125,79,30,14,88,126,178,149,136,19,97,70,148," ",
            26,98,156,59,167,25,55,151,5,116,180,81,137,139,83,48,52,11,15,175,61,115," ",
            112,122,131,29,53,161,150,66,119,135,43,28,101,24,169,74,124,168,31,50,109,165,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1928",217,95,12,158,99,58,18,105,10,118,144,106,94,20,17,87,172,65,33,133,38,41," ",
            110,79,26,149,126,157,171,19,44,166,125,88,134,112,136,14,178,128,160,30,132,97," ",
            25,156,180,175,59,98,167,42,52,148,48,151,81,116,115,139,137,5,55,15,83,11," ",
            43,53,122,131,70,135,101,169,24,161,50,150,28,168,29,119,124,165,31,109,66,74,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1929",145,58,105,12,94,18,172,95,158,87,17,99,133,10,20,110,106,79,118,144,33,65," ",
            19,44,128,26,38,171,149,41,178,125,157,166,43,112,160,134,14,25,136,30,88,126," ",
            132,156,55,48,98,183,148,83,151,137,52,167,116,59,42,5,180,175,115,139,81,15," ",
            131,28,135,122,29,50,70,124,53,24,150,97,101,161,169,66,168,119,165,31,74,109,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1930",10,12,145,133,87,58,110,105,99,18,158,44,79,20,144,95,118,172,17,19,94,106," ",
            65,171,166,178,132,26,134,33,149,25,157,128,38,112,43,30,125,131,14,160,136,41," ",
            48,98,180,167,151,88,156,42,73,175,55,183,5,139,59,15,81,52,116,83,137,115," ",
            126,53,28,29,150,122,101,135,70,24,165,161,66,50,31,74,168,169,97,164,119,124,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1931",65,10,145,87,12,171,144,133,17,99,118,44,158,105,58,18,20,110,95,19,79,172," ",
            178,94,157,131,38,26,25,166,112,43,125,106,134,149,160,126,48,128,33,132,14,30," ",
            98,73,47,167,15,52,151,88,183,180,55,156,83,5,59,168,81,42,139,116,137," ",
            70,136,150,53,28,101,66,29,41,124,169,50,135,122,24,97,161,31,165,107,74,164,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1932",10,12,145,171,118,87,58,94,133,144,65,158,17,99,18,105,110,44,95,178,20,19," ",
            157,166,70,38,125,106,112,26,134,160,25,149,79,131,126,128,132,98,33,172,48,43," ",
            88,180,156,47,168,59,73,14,15,52,167,151,5,83,81,107,139,137,42,183,116,55," ",
            28,66,124,136,53,50,74,122,31,165,169,29,150,101,30,135,6,24,41,97,119,161,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1933",10,87,166,58,105,158,171,18,94,133,145,157,12,65,178,110,95,99,44,17,118,144," ",
            79,134,20,28,26,25,172,132,128,131,19,38,33,149,88,70,125,126,160,106,112,98," ",
            14,48,156,168,59,180,167,15,81,47,83,183,42,52,116,55,107,151,73,5,139,137," ",
            124,50,136,135,43,101,31,161,66,29,97,53,122,6,169,150,74,119,30,165,24,41,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1934",10,158,145,105,79,58,99,65,171,157,134,44,12,133,18,87,178,94,17,110,95,166," ",
            28,20,172,19,106,118,70,131,125,38,144,33,88,124,26,14,160,132,149,25,128,126," ",
            59,81,47,98,55,167,156,107,139,48,180,83,52,168,183,116,15,5,73,137,151,42," ",
            43,136,50,101,53,169,122,31,29,165,66,112,135,97,30,161,24,6,41,74,150,119,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1935",158,58,87,157,28,10,134,44,105,133,94,17,20,110,178,65,79,171,99,145,12,18," ",
            106,43,144,172,166,95,131,118,70,19,124,25,160,38,33,26,149,59,125,14,132,88," ",
            48,47,167,98,156,52,128,83,5,168,139,55,42,73,15,183,81,180,107,137,151,116," ",
            50,101,136,135,169,53,29,24,126,165,6,112,30,97,122,74,31,150,161,41,119,66,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1936",105,43,10,58,178,28,110,158,133,157,17,79,44,134,87,171,65,99,94,20,106,145," ",
            95,19,38,118,131,172,144,50,12,166,70,18,33,14,48,160,124,125,149,26,25,59," ",
            156,98,47,128,88,83,81,180,107,42,132,183,5,151,116,15,139,137,167,52,73,55," ",
            101,126,29,169,136,24,122,112,135,150,74,97,161,53,31,30,168,41,119,165,66,6,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1937",10,178,134,43,110,28,20,158,94,44,99,19,58,65,87,95,157,17,133,79,105,171," ",
            12,106,144,50,166,33,26,70,172,38,48,101,131,124,149,18,145,160,118,125,14,156," ",
            167,59,88,128,73,139,98,52,47,180,183,42,116,25,132,151,137,81,55,83,15,5," ",
            112,30,135,169,29,136,53,161,122,41,126,150,24,107,31,119,66,6,97,165,168,74,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1938",65,178,43,110,10,58,157,20,134,79,99,12,94,106,19,158,133,28,87,44,17,95," ",
            18,144,145,50,105,48,101,166,118,171,172,70,112,33,131,38,26,149,160,125,124,167," ",
            14,59,25,151,128,47,88,52,156,73,139,81,15,180,137,116,98,55,42,183,83,5," ",
            119,53,29,169,136,135,90,30,161,6,126,150,41,66,24,107,122,132,165,97,168,31,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1946",99,106,178,157,19,144,134,12,158,65,110,133,10,58,44,79,18,20,43,87,28,94," ",
            105,33,17,48,118,166,171,50,95,14,125,172,101,149,70,26,38,112,131,145,160,119," ",
            59,139,47,156,25,137,180,52,15,167,88,98,83,73,183,42,55,116,128,5,151,81," ",
            41,135,30,161,168,90,24,150,136,132,165,126,122,31,66,169,29,53,97,6,124,107,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1947",10,106,33,58,178,12,134,133,19,105,99,144,43,65,157,110,20,44,87,158,18,79," ",
            17,118,149,145,41,172,171,166,95,50,70,14,101,26,28,48,131,94,125,38,59,112," ",
            98,139,180,73,88,5,15,107,42,52,128,137,183,25,151,55,156,167,83,47,81,116," ",
            135,24,168,90,160,126,30,132,150,136,66,119,53,122,169,161,97,165,6,31,124,29,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1948",133,106,58,118,10,178,105,158,43,12,157,99,44,20,33,19,17,65,110,87,134,144," ",
            70,171,149,41,166,48,172,145,14,101,79,38,135,18,94,50,26,28,95,131,125,98," ",
            88,139,59,55,73,128,137,156,180,107,167,52,15,183,42,83,116,47,81,5,151,25," ",
            160,136,24,161,31,29,90,112,165,124,126,66,132,168,119,30,169,150,97,122,6,53,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1949",133,178,158,106,118,10,19,99,110,33,58,12,44,171,87,20,70,65,157,43,105,17," ",
            166,145,144,149,94,134,88,160,28,41,79,50,14,48,95,18,101,38,172,135,131,26," ",
            59,73,137,98,167,139,52,107,42,156,128,47,5,116,15,151,55,83,25,180,81,183," ",
            126,122,150,125,165,169,53,29,31,136,124,24,132,161,30,66,90,97,168,6,119,112,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1950",166,106,19,118,10,110,133,20,99,33,58,158,157,178,12,171,43,70,87,44,145,65," ",
            134,105,41,17,94,18,50,144,28,88,59,149,172,95,14,135,126,160,101,38,48,79," ",
            139,107,42,167,98,26,25,73,52,156,137,143,47,180,128,83,183,55,15,146,151,81,5,116," ",
            125,124,136,131,112,31,150,90,24,30,119,132,29,66,168,49,161,6,97,165,122,74,169,53,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1951",106,166,10,133,20,12,134,118,19,43,99,158,171,33,105,178,58,110,44,157,87,70," ",
            145,41,17,125,95,94,65,101,139,28,144,172,149,18,126,59,38,88,160,14,50,135," ",
            98,79,156,128,73,107,42,26,83,183,167,15,48,143,25,52,151,180,47,81,137,5,55,179," ",
            131,136,124,112,29,119,31,122,150,49,165,6,132,24,30,161,90,97,53,146,169,74,66,168,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1952",10,134,178,171,43,33,19,106,158,166,12,41,110,20,133,118,99,145,44,105,157,58," ",
            144,87,101,131,95,17,125,70,18,94,160,139,59,172,98,65,28,88,126,38,149,14," ",
            128,132,180,183,79,151,26,73,42,52,156,48,167,81,143,25,83,107,15,47,55,137,179,5," ",
            31,112,122,124,30,50,29,150,24,169,136,165,53,97,119,90,66,161,6,135,74,49,146,168,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1953",178,171,87,106,20,19,33,44,43,41,134,10,12,133,118,166,105,158,145,144,110,99," ",
            95,65,18,125,139,101,17,70,31,94,157,59,172,126,88,98,38,58,131,160,28,128," ",
            132,14,143,73,25,48,107,180,26,156,151,15,42,167,5,52,79,83,137,179,55,183,81,47," ",
            90,29,30,169,122,149,124,136,66,74,97,112,165,50,119,150,6,135,24,161,146,53,49,168,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1954",44,178,133,158,106,12,105,118,10,33,65,87,144,134,43,166,171,20,19,41,95,145," ",
            17,101,139,94,157,18,126,172,31,160,99,110,38,70,125,98,132,59,88,131,90,58," ",
            14,5,143,183,83,48,73,179,156,128,151,137,107,81,55,26,15,180,167,42,25,52,79,47," ",
            30,97,149,74,112,29,169,165,50,150,28,124,122,6,135,146,24,136,119,53,161,66,168,49,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1955",106,19,178,105,10,17,33,20,158,101,118,133,171,43,65,44,41,166,134,12,87,144," ",
            145,94,99,18,95,31,125,98,70,160,30,132,157,110,38,172,59,14,139,126,131,88," ",
            79,58,5,83,151,48,156,25,143,179,183,137,73,180,55,167,47,107,81,128,42,15,26,52," ",
            97,29,90,150,165,28,124,50,24,74,122,49,146,149,6,66,136,135,119,168,169,112,53,161,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1956",106,166,134,19,10,178,33,94,20,12,171,17,44,145,65,101,118,105,133,158,41,43," ",
            95,125,99,18,157,110,144,172,31,160,70,87,30,59,97,79,139,98,14,126,38,132," ",
            58,83,5,179,156,48,183,88,25,15,81,180,137,143,42,107,73,55,128,26,47,151,167,52," ",
            90,165,49,149,24,29,150,28,146,135,169,119,136,122,168,50,112,131,6,53,66,74,161,124,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1957",178,134,166,171,105,33,19,101,106,125,44,10,17,12,20,65,94,95,118,133,158,145," ",
            172,18,43,99,70,144,110,90,87,31,157,97,79,14,41,58,30,139,160,98,126,59," ",
            143,5,25,38,88,107,81,48,156,137,167,180,183,73,128,42,83,15,179,55,47,26,151,52," ",
            29,28,131,161,136,149,150,124,24,135,119,49,122,53,132,169,146,6,50,168,165,74,112,66,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1958",178,106,10,20,171,172,33,19,17,18,118,134,125,44,94,65,101,166,95,105,12,133," ",
            145,70,144,99,157,31,58,43,41,30,160,29,110,87,158,90,97,143,98,139,79,14," ",
            131,88,28,124,49,136,167,150,81,38,25,24,135,149,161,48,119,180,5,107,156,59,126,137," ",
            132,50,183,146,66,168,53,122,112,42,74,165,47,26,169,55,179,52,83,73,128,6,15,151,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1959",33,178,166,171,145,20,106,118,134,70,19,95,10,172,65,105,18,44,17,125,94,101," ",
            12,41,99,144,110,87,43,139,31,97,90,160,98,29,143,158,157,58,131,133,88,30," ",
            149,124,146,79,50,28,38,135,49,24,136,150,119,132,81,161,14,48,25,167,183,107,180,5," ",
            168,126,165,169,112,122,74,53,66,156,26,137,6,52,55,179,59,15,42,47,151,73,128,83,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1960",166,145,178,33,65,95,106,18,12,171,10,44,105,125,41,172,70,20,17,19,118,134," ",
            90,144,99,124,110,158,160,149,143,43,131,58,101,94,139,29,31,157,97,87,133,98," ",
            38,168,135,169,126,79,132,14,81,146,88,165,119,30,50,161,28,136,24,150,167,25,49,48," ",
            130,53,122,26,183,112,55,179,52,6,59,128,156,151,74,180,137,5,42,107,66,15,83,47,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1961",90,33,166,65,144,145,12,172,171,10,20,105,19,95,106,18,17,178,125,70,41,44," ",
            99,97,158,143,131,149,87,157,139,134,118,110,101,168,43,58,124,38,94,160,31,29," ",
            133,79,24,135,130,30,136,122,161,88,26,132,126,50,53,150,169,81,146,14,165,98,28,119," ",
            112,49,180,42,25,183,6,179,15,52,128,137,55,107,167,156,151,66,48,74,59,83,47,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1962",65,166,33,95,178,145,10,99,125,144,18,172,19,171,12,70,90,20,106,17,105,97," ",
            157,44,158,110,94,87,118,38,143,41,149,131,124,139,160,133,134,58,79,43,168,101," ",
            122,161,132,50,24,130,126,150,180,88,53,49,135,30,146,112,169,14,31,136,26,29,42,81," ",
            28,128,52,107,74,165,137,167,15,179,6,55,151,183,48,59,66,129,156,119,47,98,25,83,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1963",99,106,65,166,44,145,18,10,33,171,95,144,125,172,70,178,157,19,12,17,20,90," ",
            94,158,134,43,149,105,139,118,133,110,122,87,58,161,41,97,124,38,160,131,79,143," ",
            50,53,169,24,30,136,107,88,128,130,146,31,132,150,135,28,49,101,168,14,112,52,180,126," ",
            74,42,179,66,25,165,167,29,6,81,98,47,26,59,119,48,156,129,55,137,151,183,83,15,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1964",106,94,44,65,125,166,99,145,172,18,157,33,10,171,158,12,19,95,144,70,178,17," ",
            118,122,20,149,90,124,53,87,58,50,105,134,41,139,131,38,110,43,97,133,161,160," ",
            42,30,107,88,28,31,74,130,169,79,24,150,136,135,179,146,66,143,168,128,101,132,49,14," ",
            29,112,183,129,167,137,26,47,59,52,165,48,126,180,83,119,55,6,25,151,15,98,81,156,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1965",99,94,33,106,44,171,95,166,144,157,65,172,19,10,118,12,145,125,158,70,122,18," ",
            105,149,50,87,30,178,139,58,20,17,53,133,124,42,90,43,134,131,38,41,110,97," ",
            88,112,135,143,179,74,161,136,168,146,79,169,130,129,29,31,160,24,107,128,150,66,28,183," ",
            59,55,165,49,167,101,47,126,119,151,26,15,156,52,81,14,6,83,132,48,137,98,25,180,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1966",106,125,166,94,99,65,10,95,44,144,145,157,171,33,105,172,158,70,149,118,12,19," ",
            50,178,42,18,90,87,53,112,20,17,124,88,134,133,30,131,58,139,43,41,122,38," ",
            135,110,169,136,31,146,165,161,107,128,74,168,49,97,130,129,79,143,29,24,160,55,59,179," ",
            156,151,15,167,52,150,180,83,28,6,25,81,132,66,48,14,101,119,47,126,137,183,26,98,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1967",105,106,99,94,65,44,166,171,10,118,125,172,95,33,158,149,178,157,145,50,144,70," ",
            90,135,19,17,133,110,112,18,124,42,53,20,41,87,43,12,88,58,30,134,139,131," ",
            129,38,146,165,136,169,168,15,161,29,74,24,156,151,31,128,122,97,167,107,79,49,143,130," ",
            101,14,83,52,25,150,48,180,6,59,81,119,98,28,160,55,126,132,137,66,183,47,179,26,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1968",94,99,65,10,44,166,149,172,118,171,106,90,105,33,145,178,158,125,157,50,95,135," ",
            58,53,43,110,41,87,17,19,144,112,88,42,124,134,133,30,20,12,18,129,38,70," ",
            169,161,101,24,131,165,167,151,156,14,139,29,168,136,107,31,146,97,15,74,122,83,52,128," ",
            59,81,137,25,55,49,150,98,180,160,28,179,132,47,6,143,66,130,126,48,183,119,79,26,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1969",65,94,44,58,99,50,118,106,157,105,166,10,178,33,125,171,172,90,149,53,158,145," ",
            87,19,95,110,161,144,41,18,135,112,124,42,88,30,129,20,133,17,169,43,12,134," ",
            97,101,31,70,29,107,14,136,137,25,59,168,165,139,146,167,131,81,38,74,24,151,15,156," ",
            48,180,160,132,28,6,126,98,130,49,47,143,183,122,52,79,150,66,128,179,119,55,83,26,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1970",10,94,166,178,99,44,149,106,58,50,105,118,157,65,87,125,171,53,90,172,33,19," ",
            95,144,41,42,88,101,110,112,17,124,135,161,158,129,145,133,97,169,30,43,18,20," ",
            134,70,81,12,48,31,107,139,180,165,160,14,146,29,131,137,132,167,25,168,136,38,59,74," ",
            126,24,128,183,47,49,122,151,66,179,156,55,6,28,52,130,143,150,79,39,98,119,83,15,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1971",58,94,99,105,10,166,44,106,178,144,118,95,90,172,65,171,157,50,149,53,125,87," ",
            124,17,112,135,158,19,33,30,110,42,161,88,101,145,129,133,97,134,41,70,43,169," ",
            12,29,24,126,139,31,20,131,168,18,128,146,48,160,132,180,81,137,183,167,107,14,165,25," ",
            79,150,28,143,98,179,151,130,38,39,49,59,74,119,66,136,6,83,55,47,122,15,156,52,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1972",99,10,94,90,178,172,58,166,118,17,105,44,149,144,157,95,65,106,50,124,53,171," ",
            33,135,12,110,30,158,19,129,70,145,112,101,88,125,97,161,133,42,134,41,87,29," ",
            20,126,18,128,31,132,24,131,79,167,43,180,137,150,146,48,168,183,169,81,139,28,160,143," ",
            151,85,39,6,119,107,136,66,74,98,156,38,179,14,47,25,59,165,130,83,52,49,122,55,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1973",94,99,58,90,157,33,65,135,95,10,166,178,144,105,118,50,44,172,17,149,106,124," ",
            110,101,42,97,19,158,125,171,88,126,20,112,70,12,133,30,41,129,145,53,134,161," ",
            128,31,183,180,48,79,169,6,81,87,24,150,18,43,168,167,131,85,29,132,39,146,151,137," ",
            130,74,49,38,122,136,47,25,119,66,83,98,14,160,139,165,107,143,28,55,52,59,179,156,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1974",58,99,90,65,157,144,110,105,94,33,135,178,172,50,118,10,17,95,166,101,44,42," ",
            106,12,124,158,30,171,19,88,70,20,129,97,149,126,183,125,133,128,31,112,41,145," ",
            18,131,43,161,53,132,130,168,134,74,49,85,180,38,48,79,81,150,29,6,24,167,169,87," ",
            107,146,139,47,98,39,136,28,66,25,151,119,83,165,14,122,59,52,137,156,55,160,179,143,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1975",99,135,106,58,94,90,95,105,166,124,65,157,110,50,118,12,10,172,17,178,33,144," ",
            158,30,171,20,126,149,101,125,43,19,44,70,97,88,18,131,128,31,42,129,183,133," ",
            85,41,112,29,53,180,168,134,146,130,107,132,38,48,74,139,47,79,161,145,6,49,150,81," ",
            98,122,136,167,87,24,66,169,165,59,160,14,39,83,137,52,25,28,143,55,156,119,151,179,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1976",99,105,90,12,118,106,171,10,65,94,95,110,17,135,58,124,172,30,50,158,157,166," ",
            178,44,125,20,19,101,43,126,149,112,144,18,128,88,31,33,70,41,97,42,131,85," ",
            107,29,53,139,180,134,38,145,98,146,161,74,47,167,168,130,129,48,132,133,136,122,79,183," ",
            39,66,49,25,160,14,169,59,87,150,55,52,24,156,28,165,6,137,119,143,81,83,151,179,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1977",125,99,65,105,10,171,50,12,94,106,17,58,124,110,178,44,30,90,135,172,118,95," ",
            20,149,166,29,18,158,157,128,53,70,33,144,101,97,126,112,43,31,41,19,107,88," ",
            180,39,134,130,47,168,74,49,48,161,146,167,42,145,38,98,66,129,131,139,132,25,85,133," ",
            169,150,160,28,6,79,14,136,165,122,87,59,176,143,52,119,24,156,55,81,83,183,151,137,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1978",99,125,171,65,94,90,10,12,106,50,166,110,30,149,105,124,20,178,58,135,17,44," ",
            53,29,157,158,172,126,134,118,41,70,97,39,33,128,180,31,95,101,43,144,112,18," ",
            146,169,160,74,161,42,49,88,66,28,129,19,150,145,131,47,139,107,38,48,130,168,167,98," ",
            136,79,176,14,6,174,133,119,87,183,165,143,83,85,25,132,156,24,122,137,55,59,81,52,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1979",99,106,90,10,125,178,12,149,110,171,94,124,53,166,50,29,105,157,65,30,58,20," ",
            95,158,17,44,135,101,172,39,118,134,128,160,146,97,41,180,126,169,31,70,33,43," ",
            79,18,145,48,49,42,136,66,47,161,14,144,139,112,131,74,129,19,28,88,38,150,107,176," ",
            87,168,119,133,25,174,98,130,165,6,24,59,122,143,167,156,183,81,83,132,85,55,52,137,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1980",12,90,10,171,99,149,125,106,94,166,157,105,17,110,65,50,158,178,29,124,95,53," ",
            172,126,160,18,101,58,79,135,169,145,118,44,39,146,128,180,97,20,41,134,30,31," ",
            139,14,43,87,48,133,131,33,28,136,66,119,70,129,74,112,161,47,42,168,144,49,19,88," ",
            150,98,59,176,130,6,107,55,83,122,174,38,24,25,137,143,165,52,132,156,167,85,81,183,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1981",99,90,106,166,10,160,149,65,172,105,12,125,29,50,126,17,171,157,158,94,178,110," ",
            101,169,124,145,135,14,139,95,118,18,128,44,43,39,53,58,79,146,20,41,180,97," ",
            33,42,70,98,129,74,150,28,112,131,48,136,133,134,31,119,87,66,59,168,176,161,30,47," ",
            144,25,174,24,130,49,132,88,38,85,167,19,55,83,165,6,183,156,81,107,137,122,143,52,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1982",99,169,106,166,125,12,65,172,90,10,171,149,157,124,126,158,17,101,50,105,160,29," ",
            135,178,95,70,118,145,128,94,146,14,18,39,58,42,53,110,43,44,79,139,33,20," ",
            133,41,87,119,129,98,31,131,28,168,144,25,74,24,150,134,112,174,66,97,136,180,59,48," ",
            176,88,132,143,38,49,183,161,130,107,81,165,47,30,122,156,55,6,167,137,19,83,52,85,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1983",99,149,125,106,135,10,65,166,172,12,169,90,158,124,95,101,171,157,50,17,126,178," ",
            44,145,118,105,79,18,42,146,29,94,70,87,43,14,41,133,110,53,128,58,160,39," ",
            129,176,144,88,31,168,25,74,112,20,97,33,119,98,174,134,24,139,131,28,143,150,132,66," ",
            183,59,136,30,6,19,130,49,165,167,85,156,48,55,38,52,161,122,107,180,81,137,83,47,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1984",65,99,166,106,149,44,10,145,125,12,169,171,101,118,95,172,90,50,135,124,158,157," ",
            129,17,105,133,18,29,94,146,70,79,14,176,87,128,53,42,43,144,110,126,41,178," ",
            25,112,88,74,30,31,58,183,136,24,168,139,28,59,131,174,20,119,98,160,33,97,134,39," ",
            48,19,55,38,85,167,49,161,143,52,130,132,6,107,180,47,137,66,83,150,81,156,122,165,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1985",99,65,172,106,145,44,10,125,101,166,118,169,135,149,105,12,50,129,95,90,17,171," ",
            124,43,176,133,53,88,144,128,112,157,29,14,25,94,79,87,146,158,18,42,110,70," ",
            136,131,58,174,74,168,183,126,30,28,59,19,55,139,24,31,48,20,119,38,98,41,178,160," ",
            161,47,107,132,97,49,83,122,150,85,156,52,180,33,143,6,130,137,167,81,66,39,134,165,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ["1986",65,99,166,10,124,176,101,125,169,50,106,149,145,44,172,135,118,129,43,95,105,12," ",
            58,133,128,94,90,53,131,157,144,25,14,18,136,88,171,112,87,146,17,158,79,29," ",
            24,110,161,174,74,30,126,168,19,107,28,132,59,139,47,38,48,70,31,183,20,42,55,119," ",
            122,134,150,178,49,6,97,143,180,130,39,160,41,66,81,85,52,83,156,167,137,33,165,98," ",
            142,13,104,207,9,23,159,202,163,16,45,92,152,173,210,91,123,201,209,170,211,73],
    ["1987",99,106,125,65,135,10,176,118,101,50,145,149,166,124,58,172,43,44,133,169,129," ",
            112,12,110,25,18,53,94,90,105,128,157,161,95,14,88,131,24,146,17,171,144,136,87," ",
            158,29,168,126,30,122,174,31,70,19,132,28,74,38,47,134,150,48,107,6,139,79,183,59," ",
            178,41,20,143,165,160,130,97,49,33,180,142,55,167,39,83,52,81,85,156,137,66,42,119," ",
            98,13,91,202,163,152,92,159,104,173,102,207,45,9,206,23,123,181,170,16,209,210],
    ["1988",10,99,125,124,58,166,50,65,135,112,106,176,149,43,145,101,12,110,172,118," ",
            44,105,53,169,18,161,14,90,171,94,158,24,157,25,95,128,129,131,29,133,88,146,17,168," ",
            178,144,132,70,31,134,28,47,126,20,30,160,38,87,107,41,174,136,19,122,150,48,74,6," ",
            139,167,52,143,142,97,180,39,79,98,183,42,66,165,85,33,130,137,83,156,81,49,59,55," ",
            104,91,23,181,92,202,102,13,182,123,170,159,207,9,45,163,194,206,152,208,173],
    ["1989",99,12,166,10,44,65,149,176,125,124,135,50,106,105,53,58,101,145,43,112," ",
            94,144,118,161,18,158,172,128,90,178,132,133,95,88,169,131,129,29,14,171,110,24,25,157," ",
            31,30,126,167,38,20,17,87,139,136,146,52,28,97,107,47,160,174,134,70,41,122,19,168," ",
            66,79,150,156,104,39,48,42,130,98,143,137,183,74,165,33,85,142,83,59,180,6,81,49," ",
            55,13,202,102,91,170,182,159,203,181,45,163,92,15,123,9,152,23,206,194,67,207],
    ["1990",10,99,53,94,105,106,176,125,65,166,44,135,144,149,124,50,12,101,158,58," ",
            128,172,145,126,112,29,110,14,30,129,118,178,31,90,132,43,133,131,18,169,161,95,171,88," ",
            39,150,79,20,167,28,38,25,24,174,87,17,97,157,136,66,134,146,47,160,70,52,139,107," ",
            55,156,83,130,19,33,165,143,142,122,59,137,41,98,74,168,85,48,104,42,183,81,6,180," ",
            13,49,9,91,181,163,102,202,203,15,170,123,92,182,152,45,73,23,197,16,159,206],
    ["1991",94,106,145,10,105,99,12,125,144,53,135,65,176,44,166,149,128,124,50,101,126,172," ",
            90,110,58,95,39,18,43,161,133,169,178,150,31,167,112,14,30,158,79,118,129,131,29,132," ",
            28,17,87,157,156,130,171,24,70,97,83,136,20,88,174,25,134,47,160,66,38,146,165,55," ",
            33,139,107,19,143,52,13,137,41,98,74,142,48,180,168,122,85,104,183,81,59,42," ",
            49,181,91,203,67,163,205,23,16,204,123,170,102,73,182,202,152,9,92,197,45,15],
    ["1992",106,12,124,18,135,99,145,166,105,10,44,176,65,144,50,90,94,149,128,53,110,125," ",
            118,172,133,167,161,95,112,58,79,130,178,43,14,129,30,169,126,150,17,101,158,28,39,31," ",
            157,20,132,171,160,156,97,136,29,25,139,70,33,131,87,83,24,19,66,88,134,107,174,47," ",
            41,180,13,183,168,52,38,98,146,49,137,48,142,143,55,59,85,42,165,122,74,81," ",
            181,198,54,182,197,152,16,177,92,9,123,153,91,73,163,203,204,102,202,170,67,23],
    ["1993",106,18,118,10,94,176,145,99,135,12,50,124,172,44,166,105,65,149,90,144,128,161," ",
            53,125,112,95,167,58,126,178,110,157,43,158,30,20,150,79,133,14,169,101,171,17,129,130," ",
            136,132,131,156,183,33,25,31,88,39,87,180,160,29,139,28,24,97,41,19,70,66,83,13," ",
            146,47,52,181,134,165,42,48,137,168,143,107,38,142,59,74,49,98,174,85,55,122," ",
            92,91,177,151,202,54,102,60,152,9,73,16,81,153,123,170,163,198,182,203,197,204],
    ["1994",18,106,125,99,94,118,166,135,176,149,44,10,145,172,65,50,105,12,53,124,95,90," ",
            110,136,20,178,167,14,169,144,58,79,157,112,150,128,43,101,132,133,171,158,161,33,30,126," ",
            17,28,52,31,87,181,129,88,183,160,156,19,180,25,130,29,139,146,24,39,131,41,47,97," ",
            42,168,48,38,134,107,143,70,59,49,13,98,165,174,137,85,122,83,74,55,142,66," ",
            102,177,151,9,155,91,73,81,202,123,92,16,198,67,54,60,170,153,163,203,152,182],
    ["1995",106,118,99,12,10,65,18,166,125,172,44,110,94,176,145,50,149,105,135,20," ",
            158,58,53,157,95,43,90,87,144,14,171,132,167,150,17,124,79,128,136,178,133,112,169,101," ",
            161,129,19,126,52,25,48,180,156,31,168,181,30,24,28,139,33,146,130,183,42,160,29,88," ",
            134,74,38,131,55,85,49,47,13,174,122,143,59,66,137,39,70,98,107,83,97,41,142,165," ",
            155,177,195,102,73,151,92,123,114,67,198,9,163,153,81,91,197,16,170,60,202,54],
    ["1996",106,118,10,99,12,44,145,176,95,166,94,58,18,172,65,149,50,158,110,125," ",
            20,14,178,90,144,53,133,132,135,17,167,157,124,105,43,171,129,136,161,87,25,79,128,150," ",
            38,156,101,28,30,52,19,180,33,48,74,168,169,112,134,24,31,181,131,183,130,146,139,126," ",
            174,70,42,122,160,47,41,49,98,39,107,142,143,137,13,97,88,55,59,83,165,66,29,85," ",
            102,92,155,114,177,123,67,195,163,73,151,140,153,91,196,197,60,170,81,16,198,9],
    ["1997",10,106,99,44,94,18,12,172,58,95,50,149,118,166,176,145,65,20,14,53," ",
            125,110,158,43,90,144,17,156,178,171,52,129,25,167,124,87,38,161,132,133,135,105,157,136," ",
            169,30,79,122,31,70,180,74,24,48,174,19,128,181,134,183,101,112,168,33,28,131,42,150," ",
            126,102,98,49,165,142,13,143,139,130,97,107,146,47,66,39,83,137,55,160,41,88,29,59," ",
            81,45,177,140,114,85,195,197,123,170,182,196,60,91,155,151,92,67,199,163,73,153],
    ["1998",106,10,44,94,172,12,99,58,110,95,166,145,118,65,50,176,149,43,18,125," ",
            158,25,90,17,169,20,178,144,124,87,79,171,14,53,167,156,161,52,133,135,132,38,129,30," ",
            70,168,105,74,134,174,24,157,48,112,136,101,31,19,33,126,180,49,181,128,183,122,98,102," ",
            28,39,41,143,139,97,160,107,130,81,55,66,131,47,146,13,29,150,137,165,88,83,42,142," ",
            45,91,196,140,182,155,123,200,177,195,60,69,85,114,92,59,163,151,15,170,199,67],
    ["1999",106,10,94,99,44,12,158,95,172,166,118,110,65,50,149,58,25,176,145,169," ",
            43,105,90,14,17,20,178,87,70,135,18,124,167,125,53,144,156,133,52,79,171,168,132,161," ",
            134,33,74,174,112,157,31,126,30,136,180,181,101,128,38,24,28,49,39,129,41,19,143,48," ",
            160,139,122,55,130,13,83,45,165,137,29,131,102,88,98,150,107,81,97,183,66,146,42,47," ",
            92,140,114,142,200,60,182,85,151,155,196,59,91,177,201,163,195,123,69,170,9,159],
    ["2000",106,10,99,94,90,44,158,12,43,149,118,166,95,110,172,65,58,105,50,25," ",
            70,18,20,134,17,171,33,176,169,144,125,178,74,52,124,14,145,79,156,133,53,87,135,167," ",
            112,139,136,168,157,174,24,126,30,180,132,130,181,28,128,38,49,122,39,161,31,101,160,129," ",
            29,41,48,83,97,88,19,137,45,143,150,131,107,102,146,92,183,98,66,55,165,42,81,13," ",
            140,182,54,151,96,163,155,47,59,142,85,23,201,177,60,69,123,196,114,91,200,195],
    ["2001",10,99,106,118,94,44,172,12,166,18,149,110,70,43,65,20,158,90,58,95," ",
            105,171,178,112,17,124,33,134,176,53,50,74,144,169,25,125,133,168,79,145,139,52,14,156," ",
            29,136,28,41,157,87,30,135,128,174,181,167,161,132,49,19,130,48,126,122,24,38,180,39," ",
            131,101,107,45,137,140,83,143,146,92,88,150,102,183,55,66,42,97,165,160,129,98,31,81," ",
            23,54,182,59,13,114,67,108,163,201,155,142,123,47,151,96,85,69,177,196,153,60],
    ["2002",106,10,118,44,99,18,65,149,105,166,110,43,17,70,94,12,20,172,171,158," ",
            133,95,144,136,178,125,90,124,112,176,74,134,169,53,139,33,168,58,25,50,157,145,29,79," ",
            174,52,30,135,128,41,167,131,101,161,130,49,19,156,126,28,132,181,14,48,45,87,107,122," ",
            140,83,180,24,143,98,38,129,165,183,92,39,88,55,23,102,150,97,137,31,160,42,66,146," ",
            182,114,59,47,54,85,142,81,69,108,13,155,67,123,163,35,77,96,177,201,151,91,],
    ["2003",10,44,106,99,118,12,43,20,70,17,110,149,133,166,18,105,65,95,94,178," ",
            124,171,158,172,90,53,174,144,136,112,157,50,41,125,134,169,139,52,33,58,74,168,25,176," ",
            131,135,30,29,161,83,132,167,24,101,49,14,180,19,128,145,28,130,156,48,79,140,126,181," ",
            59,88,165,87,107,122,98,182,129,160,23,38,39,45,31,92,150,55,97,102,137,143,42,183," ",
            47,85,146,13,7,66,114,155,177,5,77,163,54,35,142,108,162,69,81,67,96,123,],
    ["2004",44,10,106,65,99,20,110,105,166,12,43,17,70,118,18,133,171,53,124,149," ",
            158,174,90,58,134,172,136,144,178,112,135,157,33,94,95,41,131,169,50,29,52,74,125,139," ",
            101,88,167,28,145,83,30,24,87,59,25,161,14,168,49,19,48,132,128,113,165,180,130,156," ",
            182,143,160,150,102,98,122,55,137,181,97,31,107,45,129,23,38,79,126,47,146,140,92,39," ",
            13,85,42,7,155,66,114,177,81,5,54,51,142,77,162,35,183,40,123,69,67,96,,],
    ["2005",44,106,99,10,166,18,118,20,172,174,65,70,43,110,105,12,133,17,171,158," ",
            136,144,169,134,94,53,178,50,124,101,41,149,157,131,90,95,33,88,145,58,135,52,112,29," ",
            150,49,28,87,14,160,125,59,30,128,25,143,132,74,182,48,24,167,19,139,83,113,161,168," ",
            42,122,97,79,45,181,98,55,130,146,23,31,180,137,47,107,102,13,38,165,126,156,129,140," ",
            5,85,78,81,114,155,66,183,35,54,177,39,7,40,92,77,51,151,69,162,142,9,,],
    ["2006",106,44,99,10,166,65,20,136,133,18,12,110,118,105,172,70,174,144,43,169," ",
            158,17,58,171,178,149,134,157,145,49,131,53,41,90,33,124,50,135,95,14,88,150,101,94," ",
            143,30,19,125,182,128,160,42,167,112,59,132,52,122,87,74,45,29,24,97,48,25,139,28," ",
            168,83,161,113,98,31,146,156,137,130,55,181,126,13,79,85,107,47,180,5,38,102,23,165," ",
            54,129,114,183,66,35,77,155,7,92,173,140,123,69,177,81,39,51,78,152,9,162,151,191,],
    ["2007",106,44,10,99,65,12,18,133,105,172,166,118,110,174,158,20,70,136,17,58," ",
            171,157,88,30,53,169,178,90,144,131,43,41,33,135,134,145,124,14,19,149,50,95,143,49," ",
            160,125,59,42,94,150,29,128,122,87,167,168,161,97,83,31,112,182,45,52,24,74,132,101," ",
            113,130,85,156,137,55,181,48,139,25,114,13,38,28,98,79,5,146,102,54,126,47,107,180," ",
            7,39,165,66,35,155,86,69,129,78,64,141,92,183,51,140,177,173,123,81,9,185,152,184,],
    ["2008",106,99,44,10,65,12,70,166,172,105,174,157,20,133,18,158,88,118,110,171," ",
            178,17,144,136,33,134,41,160,90,30,135,145,169,59,53,19,50,58,125,14,131,124,149,43," ",
            95,130,113,94,112,143,167,150,87,128,31,49,168,97,161,29,182,156,83,42,122,52,45,85," ",
            28,66,181,38,74,137,146,54,25,48,114,55,98,139,7,5,13,132,126,102,24,79,47,101," ",
            35,39,86,165,155,92,129,91,51,180,140,107,62,64,9,141,183,69,78,15,177,123,173,186,],
    ["2009",44,106,10,166,105,12,99,65,17,18,157,70,158,20,178,174,172,33,88,133," ",
            118,171,125,41,95,19,160,144,136,30,110,59,135,58,90,169,134,14,50,143,53,145,131,130," ",
            124,94,112,43,161,87,149,49,28,168,31,113,29,42,182,128,97,66,167,83,74,181,150,156," ",
            126,24,137,114,139,7,54,48,38,132,122,146,35,25,5,85,165,52,102,98,13,45,79,55," ",
            155,101,129,140,183,91,51,2,107,39,180,141,92,9,15,162,84,86,62,73,69,64,78,,],
    ["2010",106,44,105,10,166,99,65,70,12,158,171,118,157,20,18,174,178,17,19,172," ",
            135,124,160,41,136,125,94,33,112,95,88,110,90,169,30,133,14,50,58,53,59,134,144,143," ",
            29,149,87,130,113,24,97,66,137,49,28,42,43,182,145,83,128,167,126,168,54,31,131,161," ",
            48,38,181,146,5,154,165,74,139,52,132,129,150,7,102,122,45,25,35,114,85,13,98,156," ",
            51,2,101,180,68,92,55,183,119,16,79,107,140,73,91,84,39,15,162,69,151,9,62,86,],
    ["2011",105,106,10,166,118,44,65,99,70,171,160,124,158,157,174,12,135,20,18,178," ",
            136,149,172,17,19,41,110,88,95,29,169,58,33,94,90,112,53,130,125,30,14,133,50,59," ",
            43,145,144,87,113,154,126,42,28,49,24,167,83,38,134,128,182,143,168,97,181,48,66,137," ",
            161,146,51,150,165,45,52,74,129,139,7,132,31,5,114,2,35,25,54,122,131,13,85,102," ",
            68,180,107,183,101,92,151,73,39,69,79,27,15,64,8,156,98,162,119,1,84,55,16,91,],
    ["2012",106,105,44,10,166,65,99,171,160,172,124,70,157,149,12,118,158,174,136,135," ",
            41,88,169,29,53,95,20,125,43,58,33,17,94,90,19,110,18,145,87,112,14,130,178,30," ",
            59,24,28,182,144,161,97,113,168,51,167,126,52,134,50,146,42,154,128,49,143,38,83,133," ",
            74,139,132,35,45,122,25,48,129,66,150,137,68,31,181,114,183,5,165,2,131,54,13,7," ",
            107,92,119,79,180,85,101,56,27,69,102,177,8,39,127,98,73,89,162,151,156,15,64,1,],
    ["2013",105,99,44,10,65,166,106,149,157,118,53,160,172,158,12,88,171,124,70,41," ",
            95,33,58,135,174,29,136,18,90,24,125,110,169,20,94,145,87,43,112,19,17,59,14,182," ",
            178,28,97,139,134,130,144,161,132,113,25,30,168,51,128,49,74,50,52,126,167,42,146,154," ",
            48,143,137,68,150,35,183,129,54,131,107,38,133,119,5,66,45,114,83,2,122,181,31,165," ",
            101,39,73,79,192,27,92,13,177,69,8,141,127,98,102,170,180,151,7,85,46,56,162,89,],
    ["2014",44,105,10,106,166,99,149,160,157,53,65,172,171,95,118,158,12,88,33,135," ",
            24,169,124,110,28,90,178,58,18,17,41,43,145,125,94,87,70,20,136,29,139,112,174,19," ",
            30,113,134,161,144,48,25,137,130,68,14,74,59,168,128,143,50,132,49,52,126,51,97,182," ",
            35,146,38,181,150,154,131,101,119,66,114,122,129,54,2,133,5,183,39,42,107,83,45,167," ",
            13,31,79,63,69,102,177,60,192,73,180,46,165,27,98,92,9,7,151,170,8,56,1,127,],
    ["2015",95,10,166,105,106,149,172,99,157,44,65,160,169,171,53,24,158,118,124,12," ",
            33,110,29,88,58,145,90,41,28,17,134,135,94,178,18,125,136,30,87,70,139,43,113,20," ",
            174,35,168,112,25,14,143,50,74,137,144,132,130,150,161,38,128,48,68,146,59,19,49,52," ",
            122,129,31,5,131,133,2,97,39,42,101,107,181,66,13,83,126,154,182,51,114,119,54,183," ",
            45,69,27,79,60,167,63,180,73,102,15,177,98,32,7,151,46,165,22,80,192,9,92,170,],
    ["2016",44,166,105,99,10,106,65,149,24,171,172,95,157,53,160,33,169,88,110,158," ",
            118,29,136,145,87,70,94,124,58,28,134,41,12,14,178,90,30,135,17,35,125,18,174,139," ",
            144,20,143,68,25,112,150,129,137,31,130,113,43,168,2,122,128,146,38,74,132,161,50,48," ",
            133,131,59,101,66,42,19,49,181,154,39,107,5,79,13,126,52,114,51,182,45,119,83,97," ",
            98,167,69,54,7,60,15,73,102,32,22,159,180,214,63,147,165,177,46,80,183,27,151,188,],
    ["2017",105,106,166,99,44,10,33,65,95,118,53,24,172,169,29,87,149,160,157,171," ",
            178,41,70,12,110,58,134,112,28,144,30,90,94,124,145,135,125,88,17,136,20,14,35,158," ",
            174,18,146,139,143,43,131,133,130,150,25,19,31,68,59,129,74,2,168,137,128,122,113,38," ",
            5,101,181,66,126,50,98,107,161,42,119,39,49,51,52,154,45,79,182,132,69,114,13,48," ",
            102,167,159,22,7,64,71,60,32,180,54,103,97,63,83,192,73,147,214,15,177,165,46,80,],
    ["2018",105,99,44,166,10,106,178,65,95,172,169,53,118,24,33,149,29,41,70,87," ",
            124,144,94,171,12,58,110,30,125,160,28,145,88,134,18,157,17,174,135,136,112,139,20,90," ",
            101,14,43,133,158,59,130,50,35,19,68,129,74,5,31,137,181,146,150,2,131,168,143,25," ",
            98,38,113,107,69,167,119,49,66,154,42,52,161,128,122,45,79,114,51,132,39,102,126,182," ",
            97,147,190,180,71,82,63,64,159,15,32,13,60,48,192,83,73,54,103,22,7,189,27,214,],
    ["2019",99,105,106,44,95,166,178,10,144,33,149,65,118,53,29,172,12,24,169,124," ",
            94,171,28,70,41,160,125,112,134,58,18,30,135,136,157,145,110,87,101,17,14,43,174,88," ",
            50,139,181,129,133,68,130,158,59,74,90,35,19,31,146,98,5,137,113,2,167,150,20," ",
            161,52,131,45,66,49,122,132,25,69,190,168,51,119,79,39,97,42,128,143,107,114,102,154," ",
            15,82,126,182,22,192,13,156,147,177,60,83,32,165,159,63,54,7,180,48,103,64,193,194],
    ["2020",105,106,99,44,95,172,166,10,94,65,12,118,178,53,149,29,33,70,171,144," ",
            124,169,28,160,14,24,136,41,135,110,112,101,134,157,18,50,125,17,30,87,58,181,139,145," ",
            88,130,19,158,98,129,43,133,90,74,5,52,113,59,68,35,146,131,2,174,137,122,161,31," ",
            45,39,20,114,119,69,167,190,66,42,97,51,132,154,25,107,82,128,168,49,15,143,150,79," ",
            159,165,156,83,126,48,32,180,63,192,147,54,103,22,7,182,9,173,209,177,212,13,213],
    ["2021",105,99,44,166,10,106,172,95,29,178,118,53,28,12,149,65,94,33,169,124," ",
            70,24,87,125,144,101,110,18,112,171,135,50,134,157,160,19,30,41,88,17,136,130,58,14," ",
            174,139,113,145,158,181,131,129,20,133,90,5,43,39,45,35,98,146,114,68,74,59,2,52," ",
            69,66,31,122,132,161,107,159,167,190,119,51,97,25,49,168,83,137,82,42,154,15,128,143," ",
            156,180,147,192,126,79,48,54,22,165,32,150,182,9,177,103,209,13,63,7,212,173,213],
    ["2022",105,10,106,118,99,29,12,166,28,70,53,44,178,172,24,125,65,95,94,149," ",
            33,144,101,110,50,158,18,112,171,160,169,134,124,30,88,157,17,87,139,135,41,136,19,174," ",
            131,90,145,14,20,130,58,133,181,43,98,146,68,66,35,45,31,132,129,39,113,114,5,69," ",
            97,154,122,156,42,25,190,107,15,161,79,167,52,159,119,168,74,59,82,49,2,51,83,137," ",
            180,126,48,177,13,22,32,150,63,54,192,128,209,73,147,215,9,7,183,103,165,182,143,104," "],
    ["2023",105,10,99,12,166,44,118,106,172,53,29,0,70,178,65,28,125,101,33,144," ",
     95,90,94,149,171,124,88,110,50,134,30,41,112,160,169,158,157,135,18,145,131,17,87,139," ",
     133,58,20,130,129,14,98,19,154,181,97,174,66,122,31,43,136,39,146,35,45,68,132,42," ",
     156,180,107,113,59,52,51,15,25,2,168,74,82,126,114,167,5,119,161,190,79,49,159,69," ",
     48,13,32,9,147,73,192,7,150,128,137,83,63,103,54,209,177,193,64,183,22,92,215,218," "],
    ["2024",99,10,105,44,118,12,125,29,0,28,70,53,65,172,106,178,166,95,90,149," ",
     94,33,144,158,50,30,18,112,171,110,160,145,124,169,135,133,129,157,58,134,88,101,131,41," ",
     17,180,156,43,181,97,136,20,19,87,98,14,139,154,174,66,107,130,122,35,51,31,39,146," ",
     59,132,25,168,2,126,48,190,79,49,32,161,52,68,45,15,74,82,113,167,5,119,42,114," ",
     13,183,69,137,128,192,150,73,9,162,63,83,159,147,177,182,23,7,27,54,209,103,193,64," "],
];
//Values are year and teamName subscript
var faWinners = [
             [1888 , 134], //Preston North End
             [1889 ,  18], //Blackburn Rovers
             [1890 ,  18], //Blackburn Rovers
             [1891 , 171], //West Bromwich Albion
             [1892 , 178], //Wolverhampton Wanderers
             [1893 , 126], //Notts County
             [1894 ,  12], //Aston Villa
             [1895 , 145], //Sheffield Wednesday
             [1896 ,  12], //Aston Villa
             [1897 , 125], //Nottingham Forest
             [1898 , 144], //Sheffield United
             [1899 ,  38], //Bury
             [1900 , 166], //Tottenham Hotspur
             [1901 , 144], //Sheffield United
             [1902 ,  38], //Bury
             [1903 , 105], //Manchester City
             [1904 ,  12], //Aston Villa
             [1905 ,  65], //Everton
             [1906 , 145], //Sheffield Wednesday
             [1907 , 178], //Wolverhampton Wanderers
             [1908 , 106], //Manchester United
             [1909 , 118], //Newcastle United
             [1910 ,  25], //Bradford City
             [1911 ,  14], //Barnsley
             [1912 ,  12], //Aston Villa
             [1913 ,  33], //Burnley
             [1914 , 144], //Sheffield United
             [1919 ,  12], //Aston Villa
             [1920 , 166], //Tottenham Hotspur
             [1921 ,  87], //Huddersfield Town
             [1922 ,  20], //Bolton Wanderers
             [1923 , 118], //Newcastle United
             [1924 , 144], //Sheffield United
             [1925 ,  20], //Bolton Wanderers
             [1926 ,  41], //Cardiff City
             [1927 ,  18], //Blackburn Rovers
             [1928 ,  20], //Bolton Wanderers
             [1929 ,  10], //Arsenal
             [1930 , 171], //West Bromwich Albion
             [1931 , 118], //Newcastle United
             [1932 ,  65], //Everton
             [1933 , 105], //Manchester City
             [1934 , 145], //Sheffield Wednesday
             [1935 ,  10], //Arsenal
             [1936 , 158], //Sunderland
             [1937 , 134], //Preston North End
             [1938 , 133], //Portsmouth
             [1946 ,  43], //Charlton Athletic
             [1947 , 106], //Manchester United
             [1948 , 178], //Wolverhampton Wanderers
             [1949 ,  10], //Arsenal
             [1950 , 118], //Newcastle United
             [1951 , 118], //Newcastle United
             [1952 ,  19], //Blackpool
             [1953 , 171], //West Bromwich Albion
             [1954 , 118], //Newcastle United
             [1955 , 105], //Manchester City
             [1956 ,  12], //Aston Villa
             [1957 ,  20], //Bolton Wanderers
             [1958 , 125], //Nottingham Forest
             [1959 , 178], //Wolverhampton Wanderers
             [1960 , 166], //Tottenham Hotspur
             [1961 , 166], //Tottenham Hotspur
             [1962 , 106], //Manchester United
             [1963 , 172], //West Ham United
             [1964 ,  99], //Liverpool
             [1965 ,  65], //Everton
             [1966 , 166], //Tottenham Hotspur
             [1967 , 171], //West Bromwich Albion
             [1968 , 105], //Manchester City
             [1969 ,  44], //Chelsea
             [1970 ,  10], //Arsenal
             [1971 ,  94], //Leeds United
             [1972 , 158], //Sunderland
             [1973 , 99], //Liverpool
             [1974 , 172], //West Ham United
             [1975 , 149], //Southampton
             [1976 , 106], //Manchester United
             [1977 ,  90], //Ipswich Town
             [1978 ,  10], //Arsenal
             [1979 , 172], //West Ham United
             [1980 , 166], //Tottenham Hotspur
             [1981 , 166], //Tottenham Hotspur
             [1982 , 106], //Manchester United
             [1983 , 65], //Everton
             [1984 , 106], //Manchester United
             [1985 ,  99], //Liverpool
             [1986 ,  50], //Coventry City
             [1987 , 176], //Wimbledon
             [1988 , 99], //Liverpool
             [1989 , 106], //Manchester United
             [1990 , 166], //Tottenham Hotspur
             [1991 ,  99], //Liverpool
             [1992 ,  10], //Arsenal
             [1993 , 106], //Manchester United
             [1994 ,  65], //Everton
             [1995 , 106], //Manchester United
             [1996 ,  44], //Chelsea
             [1997 ,  10], //Arsenal
             [1998 , 106], //Manchester United
             [1999 ,  44], //Chelsea
             [2000 ,  99], //Liverpool
             [2001 ,  10], //Arsenal
             [2002 ,  10], //Arsenal
             [2003 , 106], //Manchester United
             [2004 ,  10], //Arsenal
             [2005 ,  99], //Liverpool
             [2006 ,  44], //Chelsea
             [2007 , 133], //Portsmouth
             [2008 ,  44], //Chelsea
             [2009 ,  44], //Chelsea
             [2010 , 105], //Manchester City
             [2011 ,  44], //Chelsea
             [2012 , 174], //Wigan Athletic
             [2013 ,  10], //Arsenal
             [2014 ,  10], //Arsenal
             [2015 , 106], //Manchester United
             [2016 ,  10], //Arsenal
             [2017 ,  44], //Chelsea
             [2018 , 105], //Manchester City
             [2019 ,  10], //Arsenal
             [2020 ,  95], //Leicester City
             [2021 ,  99], //Liverpool
             [2022 , 105], //Manchester City
             [2023 , 106], //Manchester United
             [2024 , 53], //Chrystal Palace

];
var alphaBlue = "rgb(0,0,255,.6)";
var blue = "blue";
var alphaMaroon = "rgb(128,0,0,.8)";
var boldFont = "rel";
var headingClass = "heading";
var season ="";
var headings = new Array(faHistory.length);
var defaultColors =  [];
var colors = ["#ffff00","#c0c0c0","#ff00ff","#00ff00","#00ffc0","gold", "#ff0000",  alphaBlue, "cyan", alphaMaroon,  "black", blue];
var activeColors = new Array(colors.length);


function buildTable(table) {
    var rows = new Array(faHistory[0].length);
    var row;
    var col;
    var faClub;
    var cell;
    var contents;
    var year;
    var endYear;
    var boldClass;
    var teamSub;
    var k;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const team = urlParams.get("team")
    //set the default highlight color for a few of the teams
    if (defaultColors.length == 0) {
        //Hull City, Wolverhampton and Watford want gold.
        defaultColors[178] = "gold";
        defaultColors[169] = "gold";
        defaultColors[88] = "gold";
        //Southampton, Liverpool, Manchester United, Stoke, Aresenal, Sunderland, Nottingham Forest, Wrexham, Middlesbrough want red
        defaultColors[157] = "#ff0000"; defaultColors[149] = "#ff0000"; defaultColors[99] = "#ff0000"; defaultColors[10] = "#ff0000";
        defaultColors[158] = "#ff0000"; defaultColors[106] = "#ff0000"; defaultColors[125] = "#ff0000"; defaultColors[180] = "#ff0000";///red
        defaultColors[110] = "#ff0000";
        // Norwich City, and  Forest Green Rovers want green
        defaultColors[124] = "#00ff00"; defaultColors[69] = "#00ff00";//green
        //Manchester City and Coventry City wants cyan
        defaultColors[105] = "cyan"; defaultColors[50] = "cyan";
        
        //****NOTE**** when adding teams to the following colors, need to add a style class to the html file also
        //Chelsea, Leceister City, Cardiff City, Everton, Brighton & Hove Albion, Wigan, Ipswich Town,Sheffield Wednesday want blue
        defaultColors[95] = blue; defaultColors[41] = blue; defaultColors[44] = blue; defaultColors[65] = blue; defaultColors[29] = blue;//blue
        defaultColors[174] = blue; defaultColors[90] = blue; defaultColors[145] = blue;
        //Newcastle, Tottenham, Swansea, Derby County want black
        defaultColors[118] = "black"; defaultColors[160] = "black"; defaultColors[166] = "black"; defaultColors[58] = "black";
        //Burnley, West Ham, Aston Villa want maroon
        defaultColors[12] = alphaMaroon; defaultColors[33] = alphaMaroon; defaultColors[172] = alphaMaroon; //maroon
    }
    for (row = 0; row < faHistory[0].length; row++) {
        rows[row] = table.insertRow();
        //if (row == 96) {
            //alert("row96");
        //}
        for (col = 0; col < faHistory.length; col++) {
            faClub = " ";
            if (col < faWinners.length) {
               faClub = faWinners[faHistory.length - 1 - col][1];
            }
            cell = rows[row].insertCell(col);
            contents = faHistory[faHistory.length - 1 - col][row];
            if  (row == 0) {
                year = contents.substring(2);
                endYear = (parseInt(year)+1);
                if (endYear < 10) {
                    endYear = "0" + endYear;
                } else if (endYear == 100) {
                    endYear = "00";
                }
                season = contents + "-" + endYear;
                headings[col] = season;
                cell.className=headingClass;
                cell.innerHTML = "<div>" + buildHeading(headings[col],row,col) + "</div>";
            } else if (isNaN(contents)) {
                cell.innerHTML = "<div/>";
            } else if (contents === " ") {
                cell.className=headingClass;
                cell.innerHTML = "<div>" + buildHeading(headings[col],row,col) + "</div>";
                cell.className = headingClass;
            } else {
                var boldClass = "";
                for (k = 0; k < faHistory.length - 1 - relegations[col].length; k++) {
                    if (relegations[faHistory.length - 1 - col][k] == row) {
                        boldClass = boldFont;
                        break;
                    }
                }
                cell.className = "c" + buildClassName(contents);
                if (contents == faClub) {
                     cell.className = cell.className + " FAcup";
                }
                if (boldClass.length > 0) {
                     boldClass = " class =\"" + boldClass + "\"";
                }
                cell.innerHTML = "<div" + boldClass  + ">" + buildCell(teamNames[contents]) +  "</div>"
                cell.onclick= alterBackground ;
            }
        }
    }
    teamSub = getTeamSub(team);
    if (teamSub > -1) {
        highlightBackground(teamSub);
    }
}
function getTeamSub(name) {
    var sub;
    if (name === undefined) {
        return -1;
    }
    for (sub = 0; sub < teamNames.length; sub++) {
        if (teamNames[sub][0] == name || teamNames[sub][1] == name) {
            return sub;
        }
    }
    return -1;
}
function toggleFA(checkboxElem) {
    var ss = document.styleSheets[0];
    var rules = ss.cssRules? ss.cssRules : ss.rules;
    var i;
    var rule;
    for (i = 0; i < rules.length; i++) {
        rule = rules[i];
        if (!rule.selectorText) {
            continue;
        }
        if (rule.selectorText == ".FAcup") {
            break;
        }
    }
    if (checkboxElem.checked) {
        rule.style.backgroundImage = "url(\"fa-cup-3a.png\")";
    } else {
        rule.style.backgroundImage = "none";
    }
}

function buildClassName(teamSub) {
    if (teamNames[teamSub] === undefined) {
        alert("what " + teamSub);
        return("what");
    } else
    if (teamNames[teamSub][2]) {
        return teamNames[teamSub][2];
    }
    return teamSub;
}

function buildCell(teamInfo) {
     if (teamInfo[1] == "") {
         return teamInfo[0];
     } else {
         return "<a target=_blank href=\"https://en.wikipedia.org/wiki/" + teamInfo[1] +"\">" + teamInfo[0] + "</>";
     }
}

function buildHeading(headingText, row, col) {
    var urlYear = headingText;
    var leagueSub = computeLeague(row);
    var anchorSuffix = "_in_English_football";
    var info;
    var leagueAnchor;
    var anchor;
    var i;
    if (headingText == "1999-00") {
        urlYear = "1999-2000";
    }
    if (col == 0) {
        col = col;
    }
    
    if (row > 80 && headingText < "2015" ){ //111
        anchorSuffix = "_Football_Conference";
    }
    info = urls[0][1];
    for (i = urls.length-1; i >= 0; i--) {
        if (headingText > urls[i][0]) {
            info = urls[i][leagueSub + 1];
            break;
        }
    }
    leagueAnchor = info[1];
    anchorSuffix = anchorSuffix + leagueAnchor;
    anchor = "https://en.wikipedia.org/wiki/" + urlYear.substring(0,4) + "%E2%80%93" + urlYear.substring(5) + anchorSuffix;
    headingText = headingText + " " + info[0];
    return "<a target=_blank href=\"" + anchor +"\">" + headingText + "</>";
}

function computeLeague(subscript) {
    if (subscript > 90) {
        return 4;
    }
    if (subscript > 60) {return 3;}
    if (subscript > 30) {return 2;}
    if (subscript > 10) {return 1;}
    return 0;
}

function alterBackground() {
    var teamNumber = parseInt(this.className.substring(1));
    highlightBackground(teamNumber);
    
}
function highlightBackground(teamNumber){
    var i;
    var styleClassName = ".c" + teamNumber;
    var linkClassName = styleClassName + " a";
    var ss = document.styleSheets[0];
    var rules = ss.cssRules ? ss.cssRules : ss.rules;
    var backgroundColor = chooseColor(teamNumber);
    var foundTextColorRule =  (backgroundColor != "black" && backgroundColor != blue && backgroundColor != alphaMaroon);
    var foundRule = false;
    for (i = 0; i < rules.length; i++) {
        var rule = rules[i];
        if (!rule.selectorText) continue;
        if (rule.selectorText == styleClassName) {
            if (rule.style.backgroundColor == "white") {
                rule.style.backgroundColor = backgroundColor;
            } else {
                removeColor(teamNumber);
                rule.style.backgroundColor = "white";
            }
            foundRule = true;
            
        } else if (rule.selectorText == linkClassName && !foundTextColorRule) {            
            if (rule.style.color == "white") {
                rule.style.color = "black";
            } else {
                rule.style.color = "white";
            }
            foundTextColorRule = true;
        }
        if (foundTextColorRule && foundRule) {
            break;
        }
    }
}

function removeColor(teamNumber) {
    var i;
    for (i = 0; i < activeColors.length; i++) {
        if (teamNumber == activeColors[i]) {
            activeColors[i] = undefined;
            break;
        }
    }
}

function chooseColor(teamNumber) {
    var defaultColor;
    var i;
    var j;
    //if team is already showing a color, return it.
    for (j = 0; j < activeColors.length; j++) {
        if (activeColors[j] === teamNumber) {
            return colors[j];
        }
    }
    //if team has a default color that is not in use, pick it
    if (defaultColors[teamNumber] != undefined) {
        defaultColor = defaultColors[teamNumber];
        for (i = 0; i < colors.length; i++) {
            if (defaultColor == colors[i]) {
                if (activeColors[i] != undefined) {
                    defaultColor = undefined;
                } else {
                    activeColors[i] = teamNumber;
                }
                break;
            }
        }
    }
    
    if (defaultColor === undefined) {
        // Never assign blue, black or alphaMaroon as a default color here
        // (the last three colors in the list). Only teams with a
        // "td.class a:link" css entry for flipping the foreground color can
        // use those colors.
        for (j = 0; j < activeColors.length -3 ; j++) {
            if (activeColors[j] === undefined) {
                activeColors[j] = teamNumber;
                defaultColor = colors[j];
                break;
            }
        }
        if (defaultColor === undefined) {
            alert("Too many teams are highlighted. Click on a highlighted team to remove its highlight");
        }
    }
    return defaultColor;
}
