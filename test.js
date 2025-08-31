const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Màu ANSI
const RESET = "\x1b[0m";
const RED = "\x1b[91m";
const ORANGE = "\x1b[38;5;208m";
const YELLOW = "\x1b[93m";
const LIME = "\x1b[92m";
const GREEN = "\x1b[32m";
const SPRINGGREEN = "\x1b[38;5;48m";
const CYAN = "\x1b[96m";
const SKYBLUE = "\x1b[94m";
const ROYALBLUE = "\x1b[38;5;63m";
const INDIGO = "\x1b[38;5;54m";
const VIOLET = "\x1b[95m";
const MAGENTA = "\x1b[35m";
const DEEPPINK = "\x1b[38;5;198m";
const CRIMSON = "\x1b[38;5;161m";

function clearScreen() {
    process.stdout.write('\x1Bc'); // clear console
}

function banner() {
    clearScreen();
    console.log(RED + `
 _______ ____   ____  _         _____ _______ _____   
 |__   __/ __ \ / __ \| |       / ____|__   __|  __ \  
    | | | |  | | |  | | |      | |  __   | |  | |  | | 
    | | | |  | | |  | | |      | | |_ |  | |  | |  | | 
    | | | |__| | |__| | |____  | |__| |  | |  | |__| | 
    |_|  \____/ \____/|______|  \_____|  |_|  |_____/  
                                                      
` + RED + "                 TOOL By Doan Gia Minh" + RESET + "\n");
}

function menu() {
    console.log(YELLOW + "[1]" + RED + "  Hack Anti Ban");
    console.log(YELLOW + "[2]" + ORANGE + "  Hack Tài Nguyên");
    console.log(YELLOW + "[3]" + YELLOW + "  Hack Stage");
    console.log(YELLOW + "[4]" + LIME + "  Hack Hero");
    console.log(YELLOW + "[5]" + GREEN + "  Hack Tháp");
    console.log(YELLOW + "[6]" + SPRINGGREEN + "  Change IP");
    console.log(YELLOW + "[7]" + CYAN + "  Block Account");
    console.log(YELLOW + "[8]" + SKYBLUE + "  Put Blacklist User");
    console.log(YELLOW + "[9]" + ROYALBLUE + "  Put PvP Point");
    console.log(YELLOW + "[10]" + INDIGO + "  Put Guild War Point");
    console.log(YELLOW + "[11]" + VIOLET + "  Change Name Normal");
    console.log(YELLOW + "[12]" + MAGENTA + "  Change Name Color");
    console.log(YELLOW + "[13]" + DEEPPINK + "  Change Android ID");
    console.log(YELLOW + "[14]" + CRIMSON + "  Hack X3 Speed PvP");
    console.log(YELLOW + "[15]" + RED + "  Hack Level");
    console.log(YELLOW + "[16]" + RESET + "  Exit\n");
}

function ask(question) {
    return new Promise(resolve => rl.question(CYAN + question + RESET, resolve));
}

async function main() {
    const validPlatforms = ["AMO","ATV","SS","LG"];
    const validResources = ["Diamond","Magic","Ruby"];
    const validColors = ["Red","Blue","Green","Yellow","Purple","Pink","White"];
    
    while (true) {
        banner();
        menu();
        let choice = await ask("Enter choice: ");
        
        if(choice === "1") {
            let platform;
            do {
                platform = await ask("Nhập Nền Tảng người dùng (AMO/ATV/SS/LG): ");
                if(!validPlatforms.includes(platform)) console.log(SKYBLUE+"❌ Chỉ chấp nhận AMO, ATV, SS, LG."+RESET);
            } while(!validPlatforms.includes(platform));
            let userId = await ask("Nhập ID người dùng: ");
            console.log(RED+`Đã thực hiện chức năng Anti Ban cho tài khoản ${userId}`+RESET);
            await ask("Nhấn Enter để quay lại menu...");
        }
        else if(choice === "2") {
            let platform;
            do {
                platform = await ask("Nhập Nền Tảng người dùng (AMO/ATV/SS/LG): ");
                if(!validPlatforms.includes(platform)) console.log(SKYBLUE+"❌ Chỉ chấp nhận AMO, ATV, SS, LG."+RESET);
            } while(!validPlatforms.includes(platform));
            let userId = await ask("Nhập ID người dùng: ");
            let resource;
            do {
                resource = await ask("Nhập Tài Nguyên cần hack (Diamond/Magic/Ruby): ");
                if(!validResources.includes(resource)) console.log(SKYBLUE+"❌ Chỉ có thể hack Diamond, Magic hoặc Ruby."+RESET);
            } while(!validResources.includes(resource));
            let amount = await ask("Nhập Số Lượng cần hack: ");
            console.log(RED+`Đã gửi ${amount} ${resource} tới ${userId} (${platform})`+RESET);
            await ask("Nhấn Enter để quay lại menu...");
        }
        // Các lựa chọn khác tương tự...
        else if(choice === "16") {
            console.log(RED+"Thoát TOOL GTD..."+RESET);
            rl.close();
            break;
        }
        else {
            console.log(GREEN+`👉 Lựa chọn ${choice} không hợp lệ!`+RESET);
            await ask("Nhấn Enter để quay lại menu...");
        }
    }
}

main();
