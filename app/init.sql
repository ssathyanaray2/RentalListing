create database rentallisting;

use rentallisting;

create table listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  listingTitle VARCHAR(255),
  description TEXT,
  rent DECIMAL(10, 2),
  address VARCHAR(255),
  numberOfRooms INT,
  contactInfo VARCHAR(255)
);

insert into listings (listingTitle, description, rent, address, numberOfRooms, contactInfo) VALUES
('Bright 1BHK near Central Park', 'Newly renovated, includes heating and parking.', 1100.00, '789 Elm St, New York, NY 10019', 1, 'contact@centralrentals.com'),
('Spacious 4BHK Villa', 'Fully furnished villa with swimming pool and garden.', 3200.00, '12 Palm Drive, Beverly Hills, CA 90210', 4, 'info@luxvilla.com'),
('Compact Room in Downtown', 'Affordable room with shared kitchen, perfect for students.', 600.00, '55 King St, Boston, MA 02108', 1, 'roomshare@bostonrent.com'),
('2BHK with Lake View', 'Peaceful apartment overlooking the lake, includes balcony.', 1450.00, '22 Lakeview Rd, Seattle, WA 98101', 2, 'lakehomes@seattlerentals.com'),
('Studio Apartment with Amenities', 'Includes gym, laundry, and rooftop access.', 950.00, '9 Liberty Ave, Austin, TX 73301', 1, 'studio@austinliving.com');


