CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    dance_style VARCHAR(100) NOT NULL,
    class_day VARCHAR(50) NOT NULL,
    class_time VARCHAR(20) NOT NULL,
    level VARCHAR(50),
    instructor VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bookings_created_at ON bookings(created_at);
CREATE INDEX idx_bookings_class_day ON bookings(class_day);
