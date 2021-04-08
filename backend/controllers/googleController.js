import asyncHandler from 'express-async-handler'

import pkg from 'googleapis';
const { google } = pkg

/*******************/
/** CONFIGURATION **/
/*******************/

const googleConfig = {
    client_id: `739310312209-ee801onlrtih70d64dok3e25kour6m1h.apps.googleusercontent.com`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`, // e.g. _ASDFA%DFASDFASDFASD#FAD-
    redirect: `https://localhost:3000`, // this must match your google api settings
};

const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
];

/*************/
/** HELPERS **/
/*************/

function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.client_id,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
}

function getGooglePlusApi(auth) {
    return google.plus({ version: 'v1', auth });
}

//get single activity
export const getLoginUrl = asyncHandler(async (req, res) => {

    const auth = createConnection();
    const url = getConnectionUrl(auth);

    res.status(200).json(url)
})