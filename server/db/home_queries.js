const { pool } = require('./database');


const getCategories = () => {
  return pool.query(`SELECT DISTINCT category FROM adventures;`)
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const placeholder = () => {
  return pool.query(`SELECT count(*) FROM adventures;`
  )
    .then(data => {
      const x = Math.floor(Math.random() * data.rows[0].count);
      return pool.query(`SELECT city FROM adventures where id = ${x};`);
    })
    .then(data => {
      return data.rows[0];
    });
};


//issue with SQL injection
const searchDestination = (search) => {
  return pool.query(`
    SELECT id, thumbnail_photo_url, title, description, city, curr_price, prev_price
    FROM adventures 
    WHERE lower(city) LIKE lower('%${search}%')
    OR lower(country) LIKE lower('%${search}%')
    OR lower(province_state) LIKE lower('%${search}%');
    `)
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return 'Hmm... It doesnt seem like we have that location. Try searching again or make your own listing!';
    });
};

const getUser = () => {
  return pool.query(`
  SELECT id, first_name, last_name, email, pic
  FROM users 
  WHERE id = 1;
  `)
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {

    });
};

module.exports = { getCategories, placeholder, searchDestination, getUser };

