CREATE TABLE
    `statement` (
        `id` int(11) NOT NULL,
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
        `id` int(11) NOT NULL,
        `text` varchar(255) NOT NULL DEFAULT '',
        `created_at` datetime DEFAULT current_timestamp(),
        `persona` varchar(50) NOT NULL DEFAULT '',
        PRIMARY KEY (`id`)
    );