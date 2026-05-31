
UPDATE rental_categories SET title = CASE title
  WHEN 'Прокат палаток' THEN 'Палатки'
  WHEN 'Прокат спальников' THEN 'Спальники'
  WHEN 'Прокат рюкзаков' THEN 'Рюкзаки'
  WHEN 'Прокат мебели' THEN 'Мебель'
  WHEN 'Прокат посуды' THEN 'Посуда'
  WHEN 'Прокат горелок' THEN 'Горелки'
  WHEN 'Прокат инструментов' THEN 'Инструменты'
  WHEN 'Прокат для походов' THEN 'Походы'
  WHEN 'Прокат альпинистского снаряжения' THEN 'Альпинистское снаряжение'
  WHEN 'Прокат SUP-досок' THEN 'SUP-доски'
  WHEN 'Прокат техники' THEN 'Техника'
END
WHERE title ILIKE 'прокат%';

UPDATE rental_groups SET title = 'Горнолыжное снаряжение' WHERE title = 'Прокат горнолыжного снаряжения';

UPDATE rental_subcategories SET title = regexp_replace(title, '^Прокат\s+', '', 'i') WHERE title ILIKE 'прокат%';
