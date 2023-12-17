CREATE TABLE
    `statement` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `text` varchar(255) DEFAULT NULL,
        `search_text` varchar(255) NOT NULL DEFAULT '',
        `conversation` varchar(32) NOT NULL DEFAULT '',
        `created_at` datetime DEFAULT current_timestamp(),
        `in_response_to` varchar(255) DEFAULT NULL,
        `search_in_response_to` varchar(255) NOT NULL DEFAULT '',
        `persona` varchar(50) NOT NULL DEFAULT '',
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `nsfw_content` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `text` varchar(255) NOT NULL DEFAULT '',
        `created_at` datetime DEFAULT current_timestamp(),
        `persona` varchar(50) NOT NULL DEFAULT '',
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `learn` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `command` varchar(255) NOT NULL,
        `result` varchar(255) NOT NULL,
        `user_id` varchar(255) NOT NULL,
        `created_at` datetime NOT NULL DEFAULT current_timestamp(),
        primary key(`id`)
    );