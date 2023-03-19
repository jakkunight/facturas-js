INSERT INTO users SET 
	user_insert = "System",
	user_update = "System",
	name = "Jakku",
	email = "J97k107u45k117n@gmail.com",
	age = 20,
	ci = "4945302",
	role = 1,
	password = "$argon2i$v=19$m=4096,t=3,p=1$g/babZj4jysN0XqQWzbMSg$f2oWzbYDbPfG6Ohey2peRoiP/AkDJueUQKMROQwJUA0";

INSERT INTO roles SET
	user_insert = "System",
	user_update = "System",
	name = "Programmer",
	description = "Programmer of the hole system. Can access to all records and modify them for testing porpouses.";
INSERT INTO roles SET
	user_insert = "System",
	user_update = "System",
	name = "Owner",
	description = "Owner of the hole business. Can manage all records and alter them.";
INSERT INTO roles SET
	user_insert = "System",
	user_update = "System",
	name = "Administrator",
	description = "Administrator of the hole business. Accesses all record.";
INSERT INTO roles SET
	user_insert = "System",
	user_update = "System",
	name = "Auditor",
	description = "Auditor of the system. Accesses all the records and audits them to ensure the system integrity";
INSERT INTO roles SET
	user_insert = "System",
	user_update = "System",
	name = "General Accountant",
	description = "Accountant of the business. Accesses to the finantial records of the system.";
INSERT INTO roles SET
	user_insert = "System",
	user_update = "System",
	name = "Product Seller",
	description = "Sells of the products into the inventory to the clients.";
INSERT INTO roles SET
	user_insert = "System",
	user_update = "System",
	name = "Logistic Manager",
	description = "Alters the inventory records.";
INSERT INTO roles SET
	user_insert = "System",
	user_update = "System",
	name = "Stock Buyer",
	description = "Buys new products and adds them to the inventory";
