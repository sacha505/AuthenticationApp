CREATE TABLE FlightCustomer
(ID   INT IDENTITY(1, 1), 
 Name VARCHAR(20),
 Flight VARCHAR(20)

);

CREATE TABLE FlightAdministrator
(ID   INT IDENTITY(1, 1), 
 Name VARCHAR(20)

);

CREATE TABLE Flight
(ID   INT IDENTITY(1, 1), 
 Name VARCHAR(20),
 Source VARCHAR(20),
 Destination VARCHAR(20),
 Pilot VARCHAR(20)
);

SELECT SCHEMA_NAME(FlightCustomer);
