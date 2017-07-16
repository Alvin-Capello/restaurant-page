$(document).ready(function() {
  $("#content").html("<header><ul><li><a id='home' href='#'>Home</a></li><li><a id='menu' href='#'>Menu</a></li><li><a id='contact' href='#'>Contact</a></li></ul></header><img src='http://teaessare.com/wp-content/uploads/2012/05/compassion_vegan.jpg' class='img-responsive img-thumbnail'></img><p>Come on down to the Vean Restaurant today! We serve the best Vegan foods in town!</p>");

$("#content").on("click", "#home", function() {
   $("#content").html("<header><ul><li><a id='home' href='#'>Home</a></li><li><a id='menu' href='#'>Menu</a></li><li><a id='contact' href='#'>Contact</a></li></ul></header><img src='http://teaessare.com/wp-content/uploads/2012/05/compassion_vegan.jpg' class='img-responsive img-thumbnail'></img><p>Come on down to the Vean Restaurant today! We serve the best Vegan foods in town!</p>");
});
  
$("#content").on("click", "#menu", function() {
  $("#content").html("<header><ul><li><a id='home' href='#'>Home</a></li><li><a id='menu' href='#'>Menu</a></li><li><a id='contact' href'#'>Contact</a></li</ul></header><table><tr><td>Buddha's Delight</td><td>A traditional dish eaten by Shaolin Monks. So good that you just might pass out of existence</td></tr><tr><td>Vegetable Korma</td><td>A spicy and aromatic dish. Eat this to obtain moksha.</td></tr><tr><td>Vegan Nachos</td><td>Simple, but gets the job done.</td></tr><tr><td>Pad Thai</td><td>A tried and true Vegan dish. A medley of strong flavors.</td></tr><tr><td>Vegan Sushi</td><td>A cruelty-free alternative to a classic Japanese dish.</td></tr><tr><td>Loubyeh B’zeit</td><td>An exotic option for those who want to try something different.</td></tr></table>");
});
  
$("#content").on("click", "#contact", function() {
  $("#content").html("<header><ul><li><a href='#' id='home'>Home</a></li><li><a href='#' id='menu'>Menu</a></li><li><a href='#' id='contact'>Contact</a></li></ul></header><div id='contact-info'<p>Phone Number: 000-000-0000</p><p>E-Mail: veganrestaurant@yoohoo.com</p><p>00000 Vegan Avenue, Vegan City, Vegania</p></div>");
});
});