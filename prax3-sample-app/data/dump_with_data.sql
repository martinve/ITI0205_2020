-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `games`;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `studio_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL,
  `photo_url` varchar(100) DEFAULT NULL,
  `metacritic_url` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `studio_id` (`studio_id`),
  KEY `genre_id` (`genre_id`),
  CONSTRAINT `games_ibfk_1` FOREIGN KEY (`studio_id`) REFERENCES `studios` (`id`),
  CONSTRAINT `games_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `games` (`id`, `name`, `studio_id`, `genre_id`, `photo_url`, `metacritic_url`, `created_at`, `updated_at`) VALUES
(1,	'Lumo',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:10:45',	'2020-11-10 22:10:45'),
(2,	'Outlast: Bundle of Terror',	3,	NULL,	NULL,	NULL,	'2020-11-10 22:20:36',	'2020-11-10 22:20:36'),
(3,	'Observer',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:12:29',	'2020-11-10 22:12:29'),
(4,	'Leisure Suit Larry - Wet Dreams Don\'t Dry',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:12:36',	'2020-11-10 22:12:36'),
(5,	'Yoku\'s Island Express',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:13:12',	'2020-11-10 22:13:12'),
(6,	'Ghostbusters: The Video Game Remastered',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:13:19',	'2020-11-10 22:13:19'),
(7,	'Mario Tennis™ Aces',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:13:27',	'2020-11-10 22:13:27'),
(8,	'Alien: Isolation',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:13:34',	'2020-11-10 22:13:34'),
(9,	'Super Mario Party™',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:13:43',	'2020-11-10 22:13:43'),
(10,	'Bloodroots',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:13:50',	'2020-11-10 22:13:50'),
(11,	'Stikbold! A Dodgeball Adventure DELUXE',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:13:58',	'2020-11-10 22:13:58'),
(12,	'Ni no Kuni: Wrath of the White Witch™',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:14:05',	'2020-11-10 22:14:05'),
(13,	'New Super Mario Bros.™ U Deluxe',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:14:12',	'2020-11-10 22:14:12'),
(14,	'WARHAMMER 40,000: SPACE WOLF',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:14:19',	'2020-11-10 22:14:19'),
(15,	'80 DAYS',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:14:26',	'2020-11-10 22:14:26'),
(16,	'Return of the Obra Dinn',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:14:33',	'2020-11-10 22:14:33'),
(17,	'The Gardens Between',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:14:41',	'2020-11-10 22:14:41'),
(18,	'Untitled Goose Game',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:14:50',	'2020-11-10 22:14:50'),
(19,	'SAINTS ROW®: THE THIRD™ - THE FULL PACKAGE',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:14:59',	'2020-11-10 22:14:59'),
(20,	'The Outer Worlds',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:15:08',	'2020-11-10 22:15:08'),
(21,	'World of Tanks Blitz',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:15:17',	'2020-11-10 22:15:17'),
(22,	'Luigi\'s Mansion 3',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:15:24',	'2020-11-10 22:15:24'),
(23,	'Valkyria Chronicles 4',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:15:30',	'2020-11-10 22:15:30'),
(24,	'Wolfenstein® II: The New Colossus™',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:15:37',	'2020-11-10 22:15:37'),
(25,	'Dragon\'s Dogma: Dark Arisen',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:15:43',	'2020-11-10 22:15:43'),
(26,	'Toby\'s Dream',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:15:52',	'2020-11-10 22:15:52'),
(27,	'Trine: Ultimate Collection',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:15:59',	'2020-11-10 22:15:59'),
(28,	'All-Star Fruit Racing',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:16:17',	'2020-11-10 22:16:17'),
(29,	'Super Chariot',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:16:29',	'2020-11-10 22:16:29'),
(30,	'Just Dance® 2020',	NULL,	NULL,	NULL,	NULL,	'2020-11-10 22:16:36',	'2020-11-10 22:16:36');

DROP TABLE IF EXISTS `genres`;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `genres` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1,	'Aventure',	'2020-11-10 22:44:40',	'2020-11-10 22:44:40'),
(2,	'Sports',	'2020-11-10 22:44:50',	'2020-11-10 22:44:50'),
(3,	'RPG',	'2020-11-10 22:44:57',	'2020-11-10 22:44:57'),
(4,	'Shooter',	'2020-11-10 22:44:58',	'2020-11-10 22:44:58'),
(5,	'Horror',	'2020-11-10 22:45:09',	'2020-11-10 22:45:09'),
(6,	'Platformer',	'2020-11-11 02:46:49',	'2020-11-11 02:46:49');

DROP TABLE IF EXISTS `studios`;
CREATE TABLE `studios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `studios` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1,	'Nintendo',	'2020-11-10 22:17:48',	'2020-11-10 22:17:48'),
(2,	'Ubisoft',	'2020-11-10 22:17:58',	'2020-11-10 22:17:58'),
(3,	'Red Barrels',	'2020-11-10 22:19:27',	'2020-11-10 22:19:27'),
(4,	'Activision',	'2020-11-11 02:45:12',	'2020-11-11 02:45:12'),
(5,	'DDFF',	'2020-11-11 03:10:10',	'2020-11-11 03:10:10'),
(6,	'DDFF',	'2020-11-11 03:10:46',	'2020-11-11 03:10:46');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `photo`, `description`) VALUES
(1,	'Martin',	'martin',	'martin@example.com',	'e48e2133b5afb8798339ff1bf29dbbd068dfb556',	'',	'');

-- 2020-11-11 11:25:50
