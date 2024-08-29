CREATE TABLE `learn` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `command` varchar(255) NOT NULL,
    `result` varchar(255) NOT NULL,
    `user_id` varchar(255) NOT NULL,
    `created_at` datetime NOT NULL DEFAULT current_timestamp(),
    primary key (`id`)
);

CREATE TABLE `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id` varchar(255) NOT NULL,
    `money` BIGINT NOT NULL DEFAULT 0,
    `created_at` datetime NOT NULL DEFAULT current_timestamp(),
    `blocked` BOOLEAN NOT NULL DEFAULT 0,
    primary key (`id`)
)