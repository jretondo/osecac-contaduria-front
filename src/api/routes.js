let host = ""

if (process.env.NODE_ENV === "development") {
    host = "http://localhost:3001/api"
} else {
    host = "http://172.21.10.25:3000/api"
}

const publicFiles = host + "/static"

const auth = host + "/auth"
const routes = host + "/routes"
const permissions = host + "/permissions"
const users = host + "/user"
const activity = host + "/activity"
const monthlyBalance = host + "/monthlyBalance"
const bankStatements = host + "/bankStatements"

const authDir = {
    auth
}

const activityDir = {
    activity
}

const permissionsDir = {
    permissions,
    sub: {
        list: "/list"
    }
}

const usersDir = {
    users,
    sub: {
        details: users + "/details",
        mydata: users + "/mydata"
    }
}

const routesDir = {
    routes,
    sub: {
        dashboard: routes + "/dashboard",
        userAdmin: routes + "/userAdmin"
    }
}

const monthlyBalanceDir = {
    monthlyBalance,
    sub: {
        bankBalance: monthlyBalance + "/bankBalance",
        bookBalance: monthlyBalance + "/bookBalance"
    }
}

const bankStatementsDir = {
    bankStatements,
    sub: {
        balance: bankStatements + "/balance",
        movements: bankStatements + "/movements",
        types: bankStatements + "/types"
    }
}

const API_ROUTES = {
    publicFiles,
    authDir,
    routesDir,
    permissionsDir,
    usersDir,
    activityDir,
    monthlyBalanceDir,
    bankStatementsDir
}

export default API_ROUTES