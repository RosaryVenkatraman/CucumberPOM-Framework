Feature: Freshbenies Admin HomePage Test.

 @Sanity
 Scenario: Validate whether all the menus and submenus are shown

 Given User is in homepage
 Then Verify for the submenus under the menu ActionItems
 Then Verify for the submenus under the menu Broker
 Then Verify for the submenus under the menu Employer
 Then Verify for the submenus under the menu Member
 Then Verify for the submenus under the menu Proposals
 Then Verify for the submenus under the menu Reports
 Then Verify for the submenus under the menu Admin
 Then Verify for the submenus under the menu ManageUser
 Then CloseHomePage