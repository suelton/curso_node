CREATE TABLE `portal_noticias`.`noticias` (
  `noticia_id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NULL,
  `noticia` TEXT NULL,
  `data_criacao` TIMESTAMP NULL DEFAULT current_timestamp,
  PRIMARY KEY (`noticia_id`));
