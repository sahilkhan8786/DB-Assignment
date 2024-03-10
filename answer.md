Question 1:- Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
Answer:- According to diagram, the relationship between "Product" and "Product_category" is one-to-many where a single product can belong to one category but one category can belong to many products

Question 2:- How could you ensure that each product in the "Product" table has a valid category assigned to it?
Answer:- Here we can take many steps for frontend and backend as well.
        (For Frontend)
         Step 1:- we can make a dropdown for category option.
         Step 2:- we can perform form validation
         Step 3:- we can pass radio option and can validate it
         (For backend)
         Step 1:- we can validate data direct in database (schema.js)
         Step 2:- we can set some default value in database (schema.js)
         Step 3:- we can perfoem data validation in backend logic
