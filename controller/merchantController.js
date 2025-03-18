const {AdvancedMerchant, user,verification, mycurrency} = require("../module/db/bdModule");
var dbCon = require('../module/db/con');



////FetchMerchant Daye from Use and Verification 
exports.getApplyMerchantData = async (req, res) => {
    try {
        const { userID } = req.params;
        //console.log(req.params)
        // Fetch user data
        await dbCon.connectDB();
        const User = await user.findOne({ userID });
        //console.log(User)
        if (!User) {
            await dbCon.closeDB();
            return res.status(404).json({ error: "User not found" });
        }

        // Fetch KYC verification data
       const kyc = await verification.findOne({ userID });
       const Mycurrency = await mycurrency.findOne({ userID });

           /// Combine user and KYC data
            const merchantData = {
                userID: User.userID,
                userName: User.userName,
                email: User.email,
                mobile: User.mobile,
                country: User.country,
                currency: Mycurrency.currency,
                currencySymbol: Mycurrency.currencySymbol,
                lastcheckBalance:Mycurrency.lastcheckBalance,
                frzeeFiatAmount: Mycurrency.frzeeFiatAmount,
                varyficatinStatus: User.varyficatinStatus,
                lastBalanceUpdate: User.lastBalanceUpdate,
                lastLogin: User.lastlogin,
                regDate: User.regdate,
                kycDetails: kyc ? {
                    varyficatinStatus: kyc.varyficatinStatus,
                    selfyPicture: kyc.selfyPicture,
                    addressProofID: kyc.addressProofID,
                    addressProofPicture: kyc.addressProofPicture,
                    idProof: kyc.idProof,
                    idNo: kyc.idNo,
                    idProofPicture: kyc.idProofPicture,
                    address1: kyc.address1,
                    address2: kyc.address2,
                    city: kyc.city,
                    state: kyc.state,
                    country: kyc.country,
                    postCode: kyc.postCode,
                    videoRecording: kyc.videoRecording,
                    date: kyc.date
                } : null
            };

            await dbCon.closeDB();
            res.json(merchantData);

       
       
       
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Apply to Become a Merchant
exports.applyMerchant = async (req, res) => {
    try {
        const { userID, merchantNickname, merchantType, postCode, address } = req.body;
        await dbCon.connectDB();
        const user = await user.findOne({userID});
        console.log(user)
        const existingMerchant = await AdvancedMerchant.findOne({ userID });
        if (existingMerchant) return res.status(400).json({ message: "Already applied" });

        const newMerchant = new AdvancedMerchant({
            userID,
            merchantNickname,
            merchantType,
            postCode,
            address,
            status: "Inactive"
        });

        await newMerchant.save();
         await dbCon.closeDB();
        res.json({ message: "Application submitted for approval" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get Merchant Details
exports.getMerchant = async (req, res) => {
    //console.log(req.params)
    try {
        await dbCon.connectDB();
        const merchant = await AdvancedMerchant.findOne({ userID: req.params.userID });
        await dbCon.closeDB();
        //if (!merchant) return res.status(404).json({ message: "Merchant not found" });
        res.json(merchant);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Update Deposit & Withdrawal Details
exports.updateMerchant = async (req, res) => {
    try {
        const { deposit, withdrawal } = req.body;
        await dbCon.connectDB();
        await AdvancedMerchant.updateOne({ userID: req.params.userID }, { deposit, withdrawal });
        await dbCon.closeDB();
        res.json({ message: "Updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Toggle Online/Offline
exports.toggleOnline = async (req, res) => {
    try {
        const { type, status } = req.body; // type = 'deposit' or 'withdrawal'
        let updateField = type === "deposit" ? { "deposit.onlineOffline": status } : { "withdrawal.onlineOffline": status };
        await dbCon.connectDB();
        await AdvancedMerchant.updateOne({ userID: req.params.userID }, { $set: updateField });
        await dbCon.closeDB();
        res.json({ message: "Status updated" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Add Deposit/Withdrawal Order
exports.addOrder = async (req, res) => {
    try {
        const { type, orderData } = req.body; // type = 'deposit' or 'withdrawal'
        let updateField = type === "deposit" ? { $push: { "orders.depositOrders": orderData } } : { $push: { "orders.withdrawalOrders": orderData } };
        await dbCon.connectDB();
        await AdvancedMerchant.updateOne({ userID: req.params.userID }, updateField);
        await dbCon.closeDB();
        res.json({ message: "Order added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Chat with Media Attachments
exports.chat = async (req, res) => {
    try {
        const { message, mediaURL } = req.body;
        await dbCon.connectDB();
        await AdvancedMerchant.updateOne(
            { userID: req.params.userID },
            { $push: { chat: { message, mediaURL, timestamp: new Date() } } }
        );
        await dbCon.closeDB();
        res.json({ message: "Message sent" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};