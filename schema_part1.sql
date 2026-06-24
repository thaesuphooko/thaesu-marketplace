-- Thaesu Online Core Database Schema
-- UUID extension ထည့်သွင်းခြင်း
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. သုံးစွဲသူများ (Users Table)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(50) DEFAULT 'customer',
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. ရောင်းချသူများ (Vendors Table)
CREATE TABLE vendors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    shop_name VARCHAR(255) NOT NULL,
    metadata JSONB, -- Cloudinary URL များကို သိမ်းဆည်းရန်
    is_active BOOLEAN DEFAULT TRUE
);

-- 3. ကုန်ပစ္စည်းများ (Products Table)
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vendor_id UUID REFERENCES vendors(id),
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(12,2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    tags TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ရှာဖွေမှုမြန်ဆန်စေရန်အတွက် GIN Index တည်ဆောက်ခြင်း
CREATE INDEX idx_products_tags ON products USING GIN (tags);
CREATE INDEX idx_products_name ON products USING GIN (to_tsvector('english', name));
