USE burgers_db;

SELECT * FROM burgers;
INSERT burgers(burger_name, devoured)
VALUES
("holypeno burger", false),
("bacon burger", false),
("double burger with cheese", false);

SELECT * FROM burgers;


USE burgers_db;
DELETE FROM burgers WHERE burger_name = "triple burger";
