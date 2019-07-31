# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sean = User.create(
  email: "sean@gmail.com",
  password: "password"
)

Coffee.create(
  name: "Colombia San Lorenzo",
  roaster: "Greenway Coffee Company",
  country: "Colombia",
  process: "Fully washed",
  coffee_type: "Single origin",
  region: "Caldas",
  altitude: "1600-2200",
  variety: "Caturra, Castillo, Colombia",
  organic: false,
  user: sean
)

Coffee.create(
  name: "Colombia Matambo",
  roaster: "Huckleberry Roasters",
  country: "Colombia",
  process: "Fully washed",
  coffee_type: "Single origin",
  region: "Huila",
  altitude: "1500-1900",
  producer: "El Desarollo Growers Association",
  variety: "Bourbon, Caturra, Castillo, Colombia",
  organic: false,
  user: sean
)

Coffee.create(
  name: "Colombia Matambo",
  roaster: "Huckleberry Roasters",
  country: "Colombia",
  process: "Fully washed",
  coffee_type: "Single origin",
  region: "Huila",
  altitude: "1500-1900",
  producer: "El Desarollo Growers Association",
  variety: "Bourbon, Caturra, Castillo, Colombia",
  organic: false,
  user: sean
)
