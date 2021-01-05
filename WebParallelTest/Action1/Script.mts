Browser("Browser").Navigate "http://advantageonlineshopping.com/#/" @@ hightlight id_;_2033082_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("Advantage Shopping").Link("LaptopsCategoryTxt").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Advantage Shopping").WebButton("buy_now").Click @@ script infofile_;_ZIP::ssf3.xml_;_
if Browser("Browser").Page("Advantage Shopping").Link("dvantage DEMO").Exist then
Browser("Browser").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping") @@ script infofile_;_ZIP::ssf4.xml_;_
End If
Browser("Browser").Page("Advantage Shopping").Link("dvantage DEMO").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Browser").Page("Advantage Shopping").Link("TabletsCategoryTxt").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Advantage Shopping").WebButton("buy_now").Click @@ script infofile_;_ZIP::ssf7.xml_;_
if Browser("Browser").Page("Advantage Shopping").Link("dvantage DEMO").Exist then
Browser("Browser").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping_2") @@ script infofile_;_ZIP::ssf8.xml_;_
End If
Browser("Browser").Page("Advantage Shopping").Link("dvantage DEMO").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Advantage Shopping").WebButton("buy_now").Click @@ script infofile_;_ZIP::ssf11.xml_;_
if Browser("Browser").Page("Advantage Shopping").Link("dvantage DEMO").Exist then
Browser("Browser").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping_3") @@ script infofile_;_ZIP::ssf12.xml_;_
End If
