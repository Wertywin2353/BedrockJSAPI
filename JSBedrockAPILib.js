// Bedrock JavaScript API for Sites
// By Wertywin2353, ver. 1.0Rel
//
// Created in 2024, Working with MCB 1.20.81

// Functions
function addServer(ServerName, ServerIP, ServerPort) {
    window.location.href = "minecraft://?addExternalServer=" + ServerName + "|" + ServerIP + ":" + ServerPort + "";
}

function addRealm(RealmCode) {
    window.location.href = "minecraft://acceptRealmInvite?inviteID=" + RealmCode + "/";
}

function runMCB() {
    window.location.href = "minecraft://";
}

function runMCPreview() {
    window.location.href = "minecraft-preview://";
}

function runVR() {
    window.location.href = "minecraft://Mode/?OpenXR=true";
}

function runMCBEditor() {
    window.location.href = "minecraft-preview:?Editor=true"
}

function OpenStore() {
    window.location.href = "minecraft:?showStoreHomeScreen=1";
}