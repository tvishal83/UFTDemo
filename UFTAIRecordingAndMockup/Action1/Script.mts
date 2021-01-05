'AI Recording
SystemUtil.Run DataTable("BrowserName", dtGlobalSheet),"http://advantageonlineshopping.com/#/"
AIUtil.SetContext Browser("creationtime:=0")
wait 5
'				Browser("creationtime:=0").Maximize
'				AIUtil("search").Search "envy"
'				AIUtil.FindTextBlock("HP ENVY X360 - 15t").Click
'				AIUtil.FindTextBlock("ADD TO CART", micWithAnchorAbove, AIUtil.FindTextBlock("HP ENVY X360 -15T LAPTOP", micFromBottom, 1)).Click
'				AIUtil("shopping_cart").Click
'				AIUtil.FindTextBlock("TOTAL: $699.99").CheckExists True
'				AIUtil.FindTextBlock("HP ENVY X360 -15T LAPTOP").CheckExists True
'				tprice=AIUtil.FindTextBlock("TOTAL: $699.99").GetText
'				AIUtil.FindTextBlock("EDIT I REMOVE").Click
'				price_list=split(tprice,"$")
'				price=price_list(1)
'				If price=DataTable.Value("laptop_price","Global") Then
'					reporter.ReportEvent micPass,"Price matched","Expected: "+DataTable.Value("laptop_price","Global") +"Actual: "+price
'				else
'					reporter.ReportEvent micFail,"Price mismatched","Expected: "+DataTable.Value("laptop_price","Global") +"Actual: "+price
'				End If
'
'				Browser("creationtime:=0").CloseAllTabs

'AI Identification Real Application - Manual without recording, 
'				'Click on laptops
'				AIUtil.FindTextBlock("LAPTOPS").Click
'				
'				
'				'Scrolling 2 pages - click on specific laptop
'				AIUtil.FindTextBlock("HP ZBook17 G2 Mobile").Click
'				
'
'				'Scrolling 2 pages - check if twitter exists in footer
'				AIUtil("twitter").CheckExists true
'				AIUtil("facebook").CheckExists true
'				'click on profile and login
'				AIUtil("profile").Click
'				AIUtil("input", "Usemame").Type "abc"
'				AIUtil("input", "Password").Type "def"
'				AIUtil("button", "SIGN IN").Click
'				inv_cred=AIUtil.FindTextBlock("Incorrect user name or password").GetText
'				If inv_cred="Incorrect user name or password" Then
'					reporter.ReportEvent micPass,"invalid cred", "msg is correct"
'				End If
'
'				Browser("creationtime:=0").CloseAllTabs
'AI Identification Mockup
				'click on laptop
				AIUtil.FindTextBlock("LAPTOPS").Click

				'click on Buy Now
				AIUtil.FindTextBlock("BUY NOW").Click

				'validate product specifications exists
				AIUtil.FindTextBlock("PRODUCT SPECIFICATIONS").CheckExists true


'AI - Placeholder for recording



