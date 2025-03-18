const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({ 
    fild:String,
    value:Number
});
var countermodul = mongoose.model('cashwalletcounters', counterSchema);

const userSchema = new mongoose.Schema({ 
    userName:String,
    userID:Number,
    transactionPin:String,
    accountNumber:String,
    multyCurrencyPermition:String,
    password:String,
    email:String,
    mobile:String,
    varyficatinStatus:String,
    selftrade:String,
    country:String,
    countryCode:String,
    currency:String,
    currencySymbol:String,
    accountBalance:String,
    usdtBalance:String,
    lastBalanceUpdate:{ type: Date},
    regdate: { type: Date, default: Date.now },
    lastlogin: { type: Date}
});
var usermodul = mongoose.model('cashwalletusers', userSchema);

const merchantSchema = new mongoose.Schema({ 
    merchantName:String,
    merchantNickname:String,
    merchantuserID:Number,
    feedback:String,
    OrderTime:String,
    limitFrom:String,
    limitTo:String,
    totalFund:String,
    postCode:String,
    merchantType:String,
    merchantStatus:String,
    onlineOffline:Number,
    usdtRate:String,
    mobile:String,
    country:String,
    countryCode:String,
    currency:String,
    currencySymbol:String,

    
    depositOrderTime:String,
    depositlimitFrom:String,
    depositlimitTo:String,
    deposittotalFund:String,
    depositonlineOffline:Number,
    depositusdtRate:String,


    date: { type: Date, default: Date.now },
});
var merchantmodul = mongoose.model('cashwalletmerchants', merchantSchema);


// const AdvancedMerchantSchema = new mongoose.Schema({
//     userID: { type: String, required: true, unique: true },
//     merchantNickname: { type: String, required: true },
//     merchantType: { type: String, required: true }, // Example: Individual or Business
//     postCode:{ type: String, required: true },
//     address:{ type: String, required: true },
//     status: { type: String, enum: ["Active", "Inactive"], default: "Inactive" }, // Merchant Active/Inactive status

//     deposit: {
//         onlineOffline: { type: Boolean, default: false }, // Online/Offline switch for Deposit
//         limitFrom: { type: Number, required: true },
//         limitTo: { type: Number, required: true },
//         timeSelection: { type: Number, enum: [15, 30, 60, 120, 180, 360, 1440], required: true }, // Time selection (minutes)
//         transactionMethod: { type: String, enum: ["Bank Transfer", "Cash Collections"], required: true },
//         totalAmount: { type: Number, required: true }, // Added Total Amount in Deposit
//         charges: { type: Number, min: 0.1, max: 3, required: true } // Charges (0.1% to 3%)
//     },

//     withdrawal: {
//         onlineOffline: { type: Boolean, default: false }, // Online/Offline switch for Withdrawal
//         limitFrom: { type: Number, required: true },
//         limitTo: { type: Number, required: true },
//         timeSelection: { type: Number, enum: [15, 30, 60, 120, 180, 360, 1440], required: true }, // Time selection (minutes)
//         transactionMethod: { type: String, enum: ["Bank Transfer", "Cash Collections"], required: true },
//         totalAmount: { type: Number, required: true }, // Total available amount for withdrawal
//         charges: { type: Number, min: 0.1, max: 3, required: true } // Charges (0.1% to 3%)
//     },

//     orders: {
//         depositOrders: [
//             {
//                 orderID: { type: String, required: true },
//                 custID: { type: String, required: true },
//                 userName: { type: String, required: true },
//                 orderTime: { type: Number, required: true }, // Time in minutes
//                 currencySymbol: { type: String, required: true },
//                 currency: { type: String, required: true },
//                 currencyRate: { type: Number, required: true },
//                 charges: { type: Number, min: 0.1, max: 3, required: true }, // Charges (0.1% to 3%)
//                 merchantPayToCust: { type: Number, required: true },
//                 status: { type: String, enum: ["Pending", "Complete"], required: true }
//             }
//         ],
//         withdrawalOrders: [
//             {
//                 orderID: { type: String, required: true },
//                 custID: { type: String, required: true },
//                 userName: { type: String, required: true },
//                 orderTime: { type: Number, required: true }, // Time in minutes
//                 currencySymbol: { type: String, required: true },
//                 currency: { type: String, required: true },
//                 currencyRate: { type: Number, required: true },
//                 charges: { type: Number, min: 0.1, max: 3, required: true }, // Charges (0.1% to 3%)
//                 merchantGetPayfromCust: { type: Number, required: true },
//                 status: { type: String, enum: ["Pending", "Complete"], required: true }
//             }
//         ]
//     }
// }, { timestamps: true });

const ChatSchema = new mongoose.Schema({
    senderID: { type: String, required: true }, // ID of sender (merchant or customer)
    message: { type: String, required: false }, // Text message (optional)
    media: { 
        url: { type: String, required: false }, // URL of the attached media file
        type: { type: String, enum: ["image", "video", "document"], required: false } // Media type
    },
    timestamp: { type: Date, default: Date.now }
});

const AdvancedMerchantSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true },
    merchantNickname: { type: String, required: true },
    merchantType: { type: String, required: true }, // Example: Individual or Business
    businessName: { type: String, required: true },
    businessLicense: { type: String, required: true }, 
    businessDocument: { type: String, required: true }, // Store file path
    merchantTier: { type: String, enum: ["regular", "pro", "diamond"], required: true },
    totalDeposit: { type: Number, required: true }, 
    currencySymbol: { type: String, required: true },
    currency: { type: String, required: true },
    postCode: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive", "rejected"], default: "Inactive" }, // Merchant Active/Inactive status

    deposit: {
        onlineOffline: { type: Boolean, default: false }, // Online/Offline switch for Deposit
        limitFrom: { type: Number, required: true },
        limitTo: { type: Number, required: true },
        timeSelection: { type: Number, enum: [15, 30, 60, 120, 180, 360, 1440], required: true }, // Time selection (minutes)
        transactionMethod: { type: String, enum: ["Bank Transfer", "Cash Collections"], required: true },
        otpVerification: { type: Boolean, default: false }, // OTP required if Cash Collection is selected
        totalAmount: { type: Number, required: true }, // Added Total Amount in Deposit
        charges: { type: Number, min: 0.1, max: 3, required: true } // Charges (0.1% to 3%)
    },

    withdrawal: {
        onlineOffline: { type: Boolean, default: false }, // Online/Offline switch for Withdrawal
        limitFrom: { type: Number, required: true },
        limitTo: { type: Number, required: true },
        timeSelection: { type: Number, enum: [15, 30, 60, 120, 180, 360, 1440], required: true }, // Time selection (minutes)
        transactionMethod: { type: String, enum: ["Bank Transfer", "Cash Collections"], required: true },
        otpVerification: { type: Boolean, default: false }, // OTP required if Cash Collection is selected
        totalAmount: { type: Number, required: true }, // Total available amount for withdrawal
        charges: { type: Number, min: 0.1, max: 3, required: true } // Charges (0.1% to 3%)
    },

    orders: {
        depositOrders: [
            {
                orderID: { type: String, required: true },
                custID: { type: String, required: true },
                userName: { type: String, required: true },
                orderTime: { type: Number, required: true }, // Time in minutes
                currencySymbol: { type: String, required: true },
                currency: { type: String, required: true },
                currencyRate: { type: Number, required: true },
                charges: { type: Number, min: 0.1, max: 3, required: true }, // Charges (0.1% to 3%)
                merchantPayToCust: { type: Number, required: true },
                otpVerified: { type: Boolean, default: false }, // OTP verification status
                status: { type: String, enum: ["Pending", "Complete"], required: true },
                chat: [ChatSchema] // Chat functionality added
            }
        ],
        withdrawalOrders: [
            {
                orderID: { type: String, required: true },
                custID: { type: String, required: true },
                userName: { type: String, required: true },
                orderTime: { type: Number, required: true }, // Time in minutes
                currencySymbol: { type: String, required: true },
                currency: { type: String, required: true },
                currencyRate: { type: Number, required: true },
                charges: { type: Number, min: 0.1, max: 3, required: true }, // Charges (0.1% to 3%)
                merchantGetPayfromCust: { type: Number, required: true },
                otpVerified: { type: Boolean, default: false }, // OTP verification status
                status: { type: String, enum: ["Pending", "Complete"], required: true },
                chat: [ChatSchema] // Chat functionality added
            }
        ]
    }
}, { timestamps: true });



var AdvancedMerchant = mongoose.model("cashwalletadvancedmerchants", AdvancedMerchantSchema);

const merchantorderSchema = new mongoose.Schema({ 
    userName:String,
    userID:Number,
    merchantNickname:String,
    merchantuserID:Number,
    OrderID:String,
    merchantType:String,
    postCode:String,
    merchantStatus:String,
    orderAmount:String,
    marchantPaytoCust:String,
    orderTime:String,
    frzeeFiatAmount:String,
    frzeeUsdtAmount:String,
    usdtRate:String,
    currencyRate:String,
    currency:String,
    currencySymbol:String,
    orderStatus:String,
    date: { type: Date, default: Date.now }
});

var merchantordermodul = mongoose.model('cashwalletmerchantorders', merchantorderSchema);

const forgetPasswordSchema = new mongoose.Schema({ 
    userName:String,
    userID:Number,
    countryCode:String,
    email:String,
    mobile:String,
    newPassword:String,
    status:String,
    daterequest: { type: Date, default: Date.now }
});
var forgetPasswordmodul = mongoose.model('cashwalletforgetpasswords', forgetPasswordSchema);

const verificationSchema = new mongoose.Schema({ 
    userName:String,
    userID:Number,
    selfyPicture:String,
    addressProofID:String,
    addressProofPicture:String,
    idProof:String,
    idNo:String,
    idProofPicture:String,
    address1:String,
    address2:String,
    city:String,
    state:String,
    country:String,
    postCode:String,
    videoRecording:String,
    varyficatinStatus:String,

    date:{ type: Date, default: Date.now }
});
var verificationmodul = mongoose.model('cashwalletverifications', verificationSchema);

const paymentmethodSchema = new mongoose.Schema({ 
    userName:String,
    userID:Number,
    paymentMethod:String,
    country:String,
    currency:String,
    upi:String,
    bankName:String,
    accountNo:String,
    ifscCode:String,
    branch:String,
    branchDistrict:String,
    sortCode:String,
    IBAN:String,
    date:{ type: Date, default: Date.now }
});
var paymentmethodmodul = mongoose.model('cashwalletpaymentmethods', paymentmethodSchema);

const adminSchema = new mongoose.Schema({ 
    userID:Number,
    password:String,
    address:String,
    mobile:String,
    type:String,
    status:String,
});
var adminmodul = mongoose.model('cashwalletadmins', adminSchema);


const contrySchema = new mongoose.Schema({ 
    country:String,
    countryCode:String,
    currency:String,
    currencySymbol:String
});
var contrymodul = mongoose.model('cashwalletcuntrys', contrySchema);

const fundreciveSchema = new mongoose.Schema({ 
    virtualAddress:String,
    payNetworkChannel:String,
    cryptoCurrency:String,
    qrCode:String
});
var fundrecivemodul = mongoose.model('cashwalletfundrecives', fundreciveSchema);

const paacryptoeainingSchema = new mongoose.Schema({ 
    amount:String,
    usdt:String,
    currency:String,
    currencySymbol:String,
    date: { type: Date, default: Date.now },

});
var paacryptoeainingmodul = mongoose.model('cashwalletpaacryptoeainings', paacryptoeainingSchema);

const chargesSchema = new mongoose.Schema({ 
    charges:String,
    limitAmount:Number,
    currency:String,

});
var chargesmodul = mongoose.model('cashwalletcharges', chargesSchema);


const mycurrencySchema = new mongoose.Schema({ 
    userID:Number,
    currency: String,
    currencySymbol: String,
    lastcheckBalance:String,
    lastCheckUsdtAmount:String,
    frzeeFiatAmount:String,
    frzeeUsdtAmount:String,
    lastCheckDate:{ type: Date}
});
var mycurrencymodul = mongoose.model('cashwalletmycurrencys', mycurrencySchema);

const usdtrateSchema = new mongoose.Schema({ 
    country:String,
    currency:String,
    usdtRate:String,
    usdtSellRate:String,
});
var usdtratemodul = mongoose.model('cashwalletusdtrates', usdtrateSchema);


const transactionledgerSchema = new mongoose.Schema({ 
    userID:String,
    trasactionID:String,
    /////Transact from
    accountFrom:String,
    userNameFrom:String,
    /////Transact to/////
    accountTo:String,
    userNameTo:String,
    transactionType:String,
    TransacFee:String,
    withdralFaitAmount:String,
    withdralusdtAmount:String,
    depositFaitAmount:String,
    dipositusdtAmount:String,
    cryptoCurrency:String,
    fiatCurrency:String,
    transactionStatus:String,
    remarks:String,
    reference:String,
    date:{ type: Date, default: Date.now }
   
});
var transactionledgermodul = mongoose.model('cashwallettransactionledgers', transactionledgerSchema);


const tangenLedgerSchema = new mongoose.Schema({ 
    trasactionID:String,
    transactionType:String,
    depositAmount:String,
    withdralAmount:String,
    cryptoCurrency:String,
    fiatCurrency:String,
    currency:String,
    cryptoWalletAddress:String,
    cryptoTransactionID:String,
    screenSort:String,
    userID:String,
    accountNumber:String,
    password:String,
    email:String,
    mobile:String,
    countryCode:String,
    status:String,
    remarks:String,
    date:{ type: Date, default: Date.now }
});
var tangenLedgermodul = mongoose.model('cashwallettangenledgers', tangenLedgerSchema);

module.exports={
    counter:countermodul,
    user:usermodul,
    admin:adminmodul,
    contry:contrymodul,
    fundrecive:fundrecivemodul,
    tangenLedger:tangenLedgermodul,
    verification:verificationmodul,
    transactionledger:transactionledgermodul,
    mycurrency:mycurrencymodul,
    usdtrate:usdtratemodul,
    paacryptoeaining:paacryptoeainingmodul,
    charges:chargesmodul,
    forgetPassword:forgetPasswordmodul,
    merchant:merchantmodul,
    merchantorder:merchantordermodul,
    paymentmethod:paymentmethodmodul,
    AdvancedMerchant
}