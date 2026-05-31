UPDATE shop_groups SET slug = CASE slug
  WHEN 'clothesandshoes' THEN 'clothesAndShoes'
  WHEN 'cyclingroller'   THEN 'cyclingRoller'
  WHEN 'swimmingsup'     THEN 'swimmingSup'
  WHEN 'tourismcamping'  THEN 'tourismCamping'
  ELSE slug
END
WHERE slug IN ('clothesandshoes','cyclingroller','swimmingsup','tourismcamping');

UPDATE shop_categories SET slug = CASE slug
  WHEN 'snowboardsky-boots'    THEN 'snowboardsky_boots'
  WHEN 'fasteners-sky'         THEN 'fasteners_sky'
  WHEN 'closes-ski'            THEN 'closes_ski'
  WHEN 'thermalunderwear'      THEN 'thermalUnderwear'
  WHEN 'helmet-sky'            THEN 'helmet_sky'
  WHEN 'sky-care'              THEN 'sky_care'
  WHEN 'air-sky'               THEN 'air_sky'
  WHEN 'gloves-sky'            THEN 'gloves_sky'
  WHEN 'socks-sky'             THEN 'socks_sky'
  WHEN 'bag-sky'               THEN 'bag_sky'
  WHEN 'winter-chains'         THEN 'winter_chains'
  WHEN 'fleece-jacket'         THEN 'fleece_jacket'
  WHEN 'down-jackets'          THEN 'down_jackets'
  WHEN 'clothes-gloves'        THEN 'clothes_gloves'
  WHEN 'hat-sea'               THEN 'hat_sea'
  WHEN 'sup-accessories'       THEN 'sup_accessories'
  WHEN 'bike-accessories'      THEN 'bike_accessories'
  WHEN 'boxing-gloves'         THEN 'boxing_gloves'
  WHEN 'martialart-helmet'     THEN 'martialart_helmet'
  WHEN 'martialart-mouth-guard'THEN 'martialart_mouth_guard'
  WHEN 'martialart-protection' THEN 'martialart_protection'
  WHEN 'martialart-clothes'    THEN 'martialart_clothes'
  WHEN 'martialart-shoes'      THEN 'martialart_shoes'
  WHEN 'martialart-rubber'     THEN 'martialart_rubber'
  WHEN 'martialart-mma'        THEN 'martialart_mma'
  WHEN 'martialart-exercise'   THEN 'martialart_exercise'
  WHEN 'fitness-gloves'        THEN 'fitness_gloves'
  WHEN 'accessories-fitnes'    THEN 'accessories_fitnes'
  WHEN 'balance-board'         THEN 'balance_board'
  WHEN 'kneepads'              THEN 'kneePads'
  WHEN 'shoessea'              THEN 'shoesSea'
  WHEN 'gas-burner'            THEN 'gas_burner'
  ELSE slug
END;

UPDATE shop_subcategories SET slug = CASE slug
  WHEN 'jackets-ski'                THEN 'jackets_ski'
  WHEN 'pants-ski'                  THEN 'pants_ski'
  WHEN 'set-ski'                    THEN 'set_ski'
  WHEN 'trekking-shoes'             THEN 'trekking_shoes'
  WHEN 'shoes-accessories'          THEN 'shoes_accessories'
  WHEN 'shoes-covers'               THEN 'shoes_covers'
  WHEN 'warmhat'                    THEN 'warmHat'
  WHEN 'tent-accessories'           THEN 'tent_accessories'
  WHEN 'mat-accessories'            THEN 'mat_accessories'
  WHEN 'trekkingsticks-accessories' THEN 'trekkingsticks_accessories'
  WHEN 'gas-burner'                 THEN 'gas_burner'
  WHEN 'gas-burner-accessories'     THEN 'gas_burner_accessories'
  WHEN 'sunglasses-accessories'     THEN 'sunglasses_accessories'
  WHEN 'knife-accessories'          THEN 'knife_accessories'
  WHEN 'binoculars-accessories'     THEN 'binoculars_accessories'
  WHEN 'tennis-accessories'         THEN 'tennis_accessories'
  WHEN 'padel-accessories'          THEN 'padel_accessories'
  WHEN 'mini-accessories'           THEN 'mini_accessories'
  WHEN 'badminton-accessories'      THEN 'badminton_accessories'
  WHEN 'football-accessories'       THEN 'football_accessories'
  WHEN 'basketball-accessories'     THEN 'basketball_accessories'
  WHEN 'kneepads'                   THEN 'kneePads'
  WHEN 'elbowpads'                  THEN 'elbowPads'
  WHEN 'roller-accessories'         THEN 'roller_accessories'
  WHEN 'roller-bags'                THEN 'roller_bags'
  ELSE slug
END;

UPDATE rental_groups SET slug = CASE slug
  WHEN 'skirental'     THEN 'skiRental'
  WHEN 'sportsrental'  THEN 'sportsRental'
  WHEN 'tourismrental' THEN 'tourismRental'
  ELSE slug
END;

UPDATE rental_categories SET slug = CASE slug
  WHEN 'avalanche-equipment' THEN 'avalanche_equipment'
  WHEN 'bikes'         THEN 'rentBIKE'
  WHEN 'fitness'       THEN 'rentFITNESS'
  WHEN 'rollers'       THEN 'rentROLLER'
  WHEN 'skates-boards' THEN 'rentBOARD'
  WHEN 'team-sports'   THEN 'rentTEAMSPORT'
  WHEN 'rentback'      THEN 'rentBack'
  WHEN 'rentburner'    THEN 'rentBURNER'
  WHEN 'rentclimbing'  THEN 'rentCLIMBING'
  WHEN 'rentdishes'    THEN 'rentDISHES'
  WHEN 'rentfurniture' THEN 'rentFURNITURE'
  WHEN 'renthiking'    THEN 'rentHIKING'
  WHEN 'rentsleeping'  THEN 'rentSleeping'
  WHEN 'rentsup'       THEN 'rentSUP'
  WHEN 'renttechnics'  THEN 'rentTECHNICS'
  WHEN 'renttent'      THEN 'rentTent'
  WHEN 'renttools'     THEN 'rentTOOLS'
  ELSE slug
END;