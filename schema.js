// USING MONGOOSE and NODE JS

// MONGOOSE IMPORT
import mongoose from 'mongoose'

// PRODUCT SCHEMA
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    SKU: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory'
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductInventory'
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductDiscount'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    },
})

const Product = mongoose.models("Product") || mongoose.model("Product", productSchema);

// PRODUCT CATEGORY SCHEMA
const productCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    },
})

const ProductCategory = mongoose.models("ProductCategory") || mongoose.model("ProductCategory", productCategorySchema);

// PRODUCT INVENTORY SCHEMA
const productInventorySchema = mongoose.Schema({

    quantity: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    },
})

const ProductInventory = mongoose.models("ProductInventory") || mongoose.model("ProductInventory", productInventorySchema);

// PRODUCT DISCOUNT SCHEMA
const productDiscountSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },
    discount_percentage: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    },
})

const ProductDiscount = mongoose.models("ProductDiscount") || mongoose.model("ProductDiscount", productDiscountSchema);
