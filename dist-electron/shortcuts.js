"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortcutsHelper = void 0;
const electron_1 = require("electron");
const ConfigHelper_1 = require("./ConfigHelper");
class ShortcutsHelper {
    constructor(deps) {
        this.deps = deps;
    }
    adjustOpacity(delta) {
        const mainWindow = this.deps.getMainWindow();
        if (!mainWindow)
            return;
        let currentOpacity = mainWindow.getOpacity();
        let newOpacity = Math.max(0.1, Math.min(1.0, currentOpacity + delta));
        console.log(`Adjusting opacity from ${currentOpacity} to ${newOpacity}`);
        mainWindow.setOpacity(newOpacity);
        // Save the opacity setting to config without re-initializing the client
        try {
            const config = ConfigHelper_1.configHelper.loadConfig();
            config.opacity = newOpacity;
            ConfigHelper_1.configHelper.saveConfig(config);
        }
        catch (error) {
            console.error('Error saving opacity to config:', error);
        }
        // If we're making the window visible, also make sure it's shown and interaction is enabled
        if (newOpacity > 0.1 && !this.deps.isVisible()) {
            this.deps.toggleMainWindow();
        }
    }
    registerGlobalShortcuts() {
        electron_1.globalShortcut.register("CommandOrControl+H", async () => {
            const mainWindow = this.deps.getMainWindow();
            if (mainWindow) {
                console.log("Taking screenshot...");
                try {
                    const screenshotPath = await this.deps.takeScreenshot();
                    const preview = await this.deps.getImagePreview(screenshotPath);
                    mainWindow.webContents.send("screenshot-taken", {
                        path: screenshotPath,
                        preview
                    });
                }
                catch (error) {
                    console.error("Error capturing screenshot:", error);
                }
            }
        });
        electron_1.globalShortcut.register("CommandOrControl+Enter", async () => {
            await this.deps.processingHelper?.processScreenshots();
        });
        electron_1.globalShortcut.register("CommandOrControl+R", () => {
            console.log("Command + R pressed. Canceling requests and resetting queues...");
            // Cancel ongoing API requests
            this.deps.processingHelper?.cancelOngoingRequests();
            // Clear both screenshot queues
            this.deps.clearQueues();
            console.log("Cleared queues.");
            // Update the view state to 'queue'
            this.deps.setView("queue");
            // Notify renderer process to switch view to 'queue'
            const mainWindow = this.deps.getMainWindow();
            if (mainWindow && !mainWindow.isDestroyed()) {
                mainWindow.webContents.send("reset-view");
                mainWindow.webContents.send("reset");
            }
        });
        // New shortcuts for moving the window
        electron_1.globalShortcut.register("CommandOrControl+Left", () => {
            console.log("Command/Ctrl + Left pressed. Moving window left.");
            this.deps.moveWindowLeft();
        });
        electron_1.globalShortcut.register("CommandOrControl+Right", () => {
            console.log("Command/Ctrl + Right pressed. Moving window right.");
            this.deps.moveWindowRight();
        });
        electron_1.globalShortcut.register("CommandOrControl+Down", () => {
            console.log("Command/Ctrl + down pressed. Moving window down.");
            this.deps.moveWindowDown();
        });
        electron_1.globalShortcut.register("CommandOrControl+Up", () => {
            console.log("Command/Ctrl + Up pressed. Moving window Up.");
            this.deps.moveWindowUp();
        });
        electron_1.globalShortcut.register("CommandOrControl+B", () => {
            console.log("Command/Ctrl + B pressed. Toggling window visibility.");
            this.deps.toggleMainWindow();
        });
        electron_1.globalShortcut.register("CommandOrControl+Q", () => {
            console.log("Command/Ctrl + Q pressed. Quitting application.");
            electron_1.app.quit();
        });
        // Adjust opacity shortcuts
        electron_1.globalShortcut.register("CommandOrControl+[", () => {
            console.log("Command/Ctrl + [ pressed. Decreasing opacity.");
            this.adjustOpacity(-0.1);
        });
        electron_1.globalShortcut.register("CommandOrControl+]", () => {
            console.log("Command/Ctrl + ] pressed. Increasing opacity.");
            this.adjustOpacity(0.1);
        });
        // Zoom controls
        electron_1.globalShortcut.register("CommandOrControl+-", () => {
            console.log("Command/Ctrl + - pressed. Zooming out.");
            const mainWindow = this.deps.getMainWindow();
            if (mainWindow) {
                const currentZoom = mainWindow.webContents.getZoomLevel();
                mainWindow.webContents.setZoomLevel(currentZoom - 0.5);
            }
        });
        electron_1.globalShortcut.register("CommandOrControl+0", () => {
            console.log("Command/Ctrl + 0 pressed. Resetting zoom.");
            const mainWindow = this.deps.getMainWindow();
            if (mainWindow) {
                mainWindow.webContents.setZoomLevel(0);
            }
        });
        electron_1.globalShortcut.register("CommandOrControl+=", () => {
            console.log("Command/Ctrl + = pressed. Zooming in.");
            const mainWindow = this.deps.getMainWindow();
            if (mainWindow) {
                const currentZoom = mainWindow.webContents.getZoomLevel();
                mainWindow.webContents.setZoomLevel(currentZoom + 0.5);
            }
        });
        // Delete last screenshot shortcut
        electron_1.globalShortcut.register("CommandOrControl+L", () => {
            console.log("Command/Ctrl + L pressed. Deleting last screenshot.");
            const mainWindow = this.deps.getMainWindow();
            if (mainWindow) {
                // Send an event to the renderer to delete the last screenshot
                mainWindow.webContents.send("delete-last-screenshot");
            }
        });
        // Unregister shortcuts when quitting
        electron_1.app.on("will-quit", () => {
            electron_1.globalShortcut.unregisterAll();
        });
    }
}
exports.ShortcutsHelper = ShortcutsHelper;
