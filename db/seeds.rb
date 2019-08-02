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
  roast: "Medium light",
  coffee_type: "Single origin",
  region: "Caldas",
  altitude: "1600-2200",
  variety: "Caturra, Castillo, Colombia",
  organic: false,
  creator: sean
)

Coffee.create(
  name: "Colombia Matambo",
  roaster: "Huckleberry Roasters",
  country: "Colombia",
  process: "Fully washed",
  roast: "Light",
  coffee_type: "Single origin",
  region: "Huila",
  altitude: "1500-1900",
  producer: "El Desarollo Growers Association",
  variety: "Bourbon, Caturra, Castillo, Colombia",
  organic: false,
  creator: sean
)

Coffee.create(
  name: "Organic Chair 6 Breakfast Blend",
  roaster: "Evans Brothers Roasters",
  country: "Colombia, Brazil",
  process: "Fully washed, pulped natural",
  roast: "Light",
  coffee_type: "Blend",
  organic: true,
  creator: sean
)

Coffee.create(
  name: "Tanzania Sombezi Peaberry",
  roaster: "Evans Brothers Roasters",
  country: "Tanzania",
  process: "Fully washed",
  coffee_type: "Single origin",
  region: "Songwe, Mbozi",
  roast: "Medium light",
  altitude: "1590",
  producer: "Sombezi",
  variety: "Bourbon",
  organic: false,
  creator: sean
)

Coffee.create(
  name: "Fall Line Espresso",
  roaster: "Evans Brothers Roasters",
  country: "Brazil, Colombia, Guatemala",
  process: "Fully washed, pulped natural, full natural",
  coffee_type: "Espresso",
  region: "Songwe, Mbozi",
  roast: "Medium",
  creator: sean
)

Coffee.create(
  name: "Brandywine Coffee Roasters",
  roaster: "Ethiopia Limu Lemma Niguisse Natural",
  country: "Ethiopia",
  process: "Full natural",
  coffee_type: "Single origin",
  region: "Limu",
  roast: "Light",
  creator: sean
)
