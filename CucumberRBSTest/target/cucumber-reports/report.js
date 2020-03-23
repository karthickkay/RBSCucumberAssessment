$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrderT-Shirt.feature");
formatter.feature({
  "line": 1,
  "name": "Order T-Shirt Test",
  "description": "Description : This feature is to test Ordering an T-Shirt and verify the same orders history page",
  "id": "order-t-shirt-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Order an T-Shirt and Verify in order history page",
  "description": "",
  "id": "order-t-shirt-test;order-an-t-shirt-and-verify-in-order-history-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in shopping site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user searches for \"T-Shirt\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select the product",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add the product to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "choose to checkout the products in the cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "choose to checkout in summary page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Sign in with username \"k.karthick93@gmail.com\" and password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "choose to checkout in address page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "agree the terms to proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select the payment type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "confirm the order in payment page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Order details will be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the Order is displayed in order history page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_is_in_shopping_site()"
});
formatter.result({
  "duration": 20236139900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T-Shirt",
      "offset": 19
    }
  ],
  "location": "Steps.user_searches_for(String)"
});
formatter.result({
  "duration": 1683282100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_the_product()"
});
formatter.result({
  "duration": 1797919400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_the_product_to_the_cart()"
});
formatter.result({
  "duration": 1637663600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_to_checkout_the_products_in_the_cart()"
});
formatter.result({
  "duration": 3438400400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_to_checkout_in_summary_page()"
});
formatter.result({
  "duration": 4677835600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "k.karthick93@gmail.com",
      "offset": 23
    },
    {
      "val": "Password123",
      "offset": 61
    }
  ],
  "location": "Steps.sign_in_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 3335565400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_to_checkout_in_address_page()"
});
formatter.result({
  "duration": 1354902800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.agree_the_terms_to_proceed_to_checkout()"
});
formatter.result({
  "duration": 2019844300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_the_payment_type()"
});
formatter.result({
  "duration": 2093581800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.confirm_the_order_in_payment_page()"
});
formatter.result({
  "duration": 2849221000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.order_details_will_be_displayed()"
});
formatter.result({
  "duration": 63316700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_Order_is_displayed_in_order_history_page()"
});
formatter.result({
  "duration": 3175150900,
  "status": "passed"
});
formatter.uri("UpdateInfo.feature");
formatter.feature({
  "line": 1,
  "name": "Update Personal Information",
  "description": "Description : This feature is to test update personal information functionality in My Account page",
  "id": "update-personal-information",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Update First Name in personal information my account page",
  "description": "",
  "id": "update-personal-information;update-first-name-in-personal-information-my-account-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in shopping site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigates to Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Sign in with username \"k.karthick93@gmail.com\" and password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User navigates to My Personal Information page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Update the First Name as \"Arun\" with current password as \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks save",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Personel Information is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_in_shopping_site()"
});
formatter.result({
  "duration": 18086213700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_navigates_to_Sign_in_page()"
});
formatter.result({
  "duration": 3693906600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "k.karthick93@gmail.com",
      "offset": 23
    },
    {
      "val": "Password123",
      "offset": 61
    }
  ],
  "location": "Steps.sign_in_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 2900794400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_navigates_to_My_Personal_Information_page()"
});
formatter.result({
  "duration": 1796402500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arun",
      "offset": 26
    },
    {
      "val": "Password123",
      "offset": 58
    }
  ],
  "location": "Steps.update_the_First_Name_as_with_current_password_as(String,String)"
});
formatter.result({
  "duration": 601428100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_save()"
});
formatter.result({
  "duration": 1169426700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.personel_Information_is_updated()"
});
formatter.result({
  "duration": 908685400,
  "status": "passed"
});
});