## Page 1

List of city/locations

http://localhost:5000/locations

List of QuickSearch/mealTypes

http://localhost:5000/quickSearch

List of restaurants

http://localhost:5000/restaurants

restaurant wrt city
http://localhost:5000/restaurants?state_id=1

## Page 2

restaurant wrt meal type
http://localhost:5000/restaurants?mealId=6

restaurant wrt cuisine & meal

http://localhost:5000/filter/1?cuisineId=2

restaurant wrt cost & meal

http://localhost:5000/filter/1?lcost=800&hcost=1000

sort on basis of cost

http://localhost:5000/filter/1?lcost=300&hcost=500&sort=-1

## Page 3

Details of a restaurant

http://localhost:5000/details/1

menu of restaurant

http://localhost:5000/menu/2

## Page 4

Menu Details (POST)
http://localhost:5000/menuItem

PlaceOrder (POST)

## Page 5

List of orders

List of orders wrt to email

Update payment details (PUT)

delete orders (DELETE)

CRUD
C - Create - POST
R - Read - GET
U - Update - PUT
D - Delete - DELETE
