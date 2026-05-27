const cartVarseConfig = { serverId: 6466, active: true };

const cartVarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6466() {
    return cartVarseConfig.active ? "OK" : "ERR";
}

console.log("Module cartVarse loaded successfully.");