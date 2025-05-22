(() => {
    const e = document.getElementById("app"),
        t = localStorage,
        n = e => {
            const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.setAttribute("class", "h-5 w-5");
            t.setAttribute("viewBox", "0 0 20 20");
            t.setAttribute("fill", "currentColor");
            const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
            n.setAttribute("d", e);
            t.appendChild(n);
            return t
        },
        o = (e, t = {}, n = []) => {
            const a = document.createElement(e);
            return Object.entries(t).forEach(([e, t]) => {
                if ("className" === e) a.className = t;
                else if (e.startsWith("on")) {
                    const n = e.slice(2).toLowerCase();
                    a.addEventListener(n, t)
                } else "undefined" != typeof t && a.setAttribute(e, String(t))
            }), n.forEach(e => {
                e && a.appendChild(e)
            }), a
        },
        a = o("div", {
            className: "w-16 bg-gradient-to-b from-gray-900 to-blue-900 flex flex-col items-center py-4 fixed h-full"
        }, [o("sl-button", {
            variant: "text",
            size: "large",
            className: "text-blue-400 mb-8",
            title: "Home"
        }, [n("M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z")]), o("sl-button", {
            variant: "text",
            size: "large",
            className: "text-gray-400 mb-8",
            title: "Videos"
        }, [n("M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z")])]),
        r = o("header", {
            className: "bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 flex justify-between items-center ml-16"
        }, [o("h1", {
            className: "text-2xl font-bold"
        }, [document.createTextNode("PrizVideo")]), o("div", {
            className: "flex items-center relative group"
        }, [
            o("div", {
                className: "flex items-center bg-blue-500 rounded-full overflow-hidden"
            }, [
                o("input", {
                    type: "search",
                    placeholder: "Search",
                    className: "bg-blue-500 text-white px-4 py-2 focus:outline-none w-64",
                    autocomplete: "off"
                }),
                o("div", {
                    className: "w-px h-6 bg-blue-500/50"
                }),
                o("sl-button", {
                    variant: "text",
                    size: "medium"
                }, [n("M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z")])
            ])
        ]), o("div", {
            className: "flex items-center"
        }, [o("sl-button", {
            variant: "neutral",
            size: "medium",
            className: "mr-2 !bg-transparent !border-blue-400",
            title: "Settings",
            id: "settings-button"
        }, [n("M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z")]), o("div", {
            id: "user-container",
            className: "flex items-center"
        }, [o("sl-button", {
            id: "user-button",
            variant: "neutral",
            size: "medium",
            className: "!bg-transparent !border-blue-400",
            title: "User Profile"
        }, [n("M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z")])])])]),
        s = () => {
            try {
                const e = t.getItem("currentUser");
                if (!e) return null;
                const n = JSON.parse(e);
                return n && n.username && n.timestamp && Date.now() - n.timestamp < 864e5 ? n : (t.removeItem("currentUser"), null)
            } catch {
                return t.removeItem("currentUser"), null
            }
        },
        i = e => e ? String(e).replace(/[&<>"']/g, e => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[e]) : "",
        l = () => {
            const e = document.createElement("sl-dialog");
            e.label = "Log in to PrizVideo";
            e.className = "login-popup";
            const style = document.createElement('style');
            style.textContent = `
                .login-popup::part(base), .signup-popup::part(base), .settings-popup::part(base) {
                    background: linear-gradient(to bottom right, #1e3a8a, #1e40af);
                    border: 2px solid rgba(147, 197, 253, 0.3);
                    border-radius: 1rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
                .login-popup::part(header), .signup-popup::part(header), .settings-popup::part(header) {
                    color: white;
                    font-size: 1.5rem;
                    border-bottom: 1px solid rgba(147, 197, 253, 0.2);
                }
                .login-popup::part(body), .signup-popup::part(body), .settings-popup::part(body) {
                    padding: 2rem;
                }
                .login-popup sl-input::part(base), .signup-popup sl-input::part(base), .settings-popup sl-input::part(base) {
                    background: rgba(30, 58, 138, 0.5);
                    border: 1px solid rgba(147, 197, 253, 0.3);
                }
                .login-popup sl-input::part(input), .signup-popup sl-input::part(input), .settings-popup sl-input::part(input) {
                    color: white;
                }
                .login-popup sl-input::part(label), .signup-popup sl-input::part(label), .settings-popup sl-input::part(label) {
                    color: #93c5fd;
                }
                .tab-panel {
                    padding: 1.5rem 0;
                }
                sl-tab-group::part(tabs) {
                    border-bottom: 1px solid rgba(147, 197, 253, 0.2);
                    display: flex;
                    justify-content: space-between;
                    padding: 0 1rem;
                }
                sl-tab::part(base) {
                    color: #93c5fd;
                    font-weight: 500;
                    padding: 0.75rem 1.5rem;
                    margin: 0 0.25rem;
                    border-radius: 0.5rem 0.5rem 0 0;
                    border: 1px solid transparent;
                    border-bottom: none;
                    position: relative;
                    background: transparent;
                    transition: all 0.2s ease;
                }
                sl-tab::part(base):hover {
                    color: white;
                    background: rgba(59, 130, 246, 0.2);
                }
                sl-tab[active]::part(base) {
                    color: white;
                    background: rgba(59, 130, 246, 0.3);
                    border-color: rgba(147, 197, 253, 0.3);
                    border-bottom-color: transparent;
                }
                sl-tab[active]::part(base)::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #3b82f6;
                }
                /* Fix for the circle issue and checkmark size */
                sl-radio-group::part(form-control-label),
                sl-radio::part(base),
                sl-radio::part(control),
                sl-checkbox::part(base),
                sl-checkbox::part(control),
                sl-radio-group::part(base),
                sl-radio::part(label),
                sl-checkbox::part(label) {
                    color: #93c5fd;
                    user-select: text;
                    pointer-events: auto;
                }
                sl-radio::part(control) {
                    --sl-input-focus-ring-color: transparent;
                }
                sl-checkbox::part(control) {
                    --sl-input-focus-ring-color: transparent;
                }
                sl-radio::part(label):focus::before,
                sl-checkbox::part(label):focus::before,
                sl-radio-group::part(form-control-label):focus::before {
                    display: none;
                }
                sl-checkbox::part(base) {
                    --sl-input-focus-ring-width: 0;
                }
                sl-checkbox::part(control) {
                    transform: scale(0.8);
                }
                /* Prevent focus circles on text and label clicks */
                sl-checkbox::part(label),
                sl-checkbox span,
                sl-radio::part(label),
                sl-radio span,
                .tab-panel div,
                .tab-panel h3,
                .tab-panel h4 {
                    -webkit-tap-highlight-color: transparent;
                    outline: none !important;
                }
                /* Make sure the labels and spans don't respond to focus/active states */
                sl-checkbox span:focus,
                sl-checkbox span:active,
                sl-radio span:focus,
                sl-radio span:active,
                .tab-panel h3:focus,
                .tab-panel h3:active,
                .tab-panel h4:focus,
                .tab-panel h4:active {
                    outline: none !important;
                }
            `;
            
            e.innerHTML = `
                ${style.outerHTML}
                <form id="login-form" class="space-y-6">
                    <sl-input name="username" label="Username" required class="mb-4 w-full"></sl-input>
                    <sl-input name="password" type="password" label="Password" required class="mb-6 w-full"></sl-input>
                    <div class="flex justify-between items-center gap-4">
                        <sl-button type="submit" variant="primary" class="w-full !bg-blue-500 hover:!bg-blue-600 transition-colors duration-200">Log In</sl-button>
                    </div>
                    <div class="text-center mt-4 text-blue-300">
                        <p>Don't have an account? <a href="#" id="signup-link" class="text-blue-400 hover:text-blue-300 underline">Sign up!</a></p>
                    </div>
                </form>
            `;
            
            document.body.appendChild(e);
            return e;
        };

        const g = () => {
            const e = document.createElement("sl-dialog");
            e.label = "Sign up for PrizVideo";
            e.className = "signup-popup";
            
            e.innerHTML = `
                <form id="signup-form" class="space-y-6">
                    <sl-input name="name" label="Name" required class="mb-4 w-full"></sl-input>
                    <sl-input name="email" type="email" label="Email" required class="mb-4 w-full"></sl-input>
                    <sl-input name="username" label="Username" required class="mb-4 w-full"></sl-input>
                    <sl-input name="password" type="password" label="Password" required class="mb-4 w-full"></sl-input>
                    <sl-input name="confirm-password" type="password" label="Confirm Password" required class="mb-6 w-full"></sl-input>
                    <div class="flex justify-between items-center gap-4">
                        <sl-button type="submit" variant="primary" class="w-full !bg-blue-500 hover:!bg-blue-600 transition-colors duration-200">Sign Up</sl-button>
                    </div>
                    <div class="text-center mt-4 text-blue-300">
                        <p>Already have an account? <a href="#" id="login-link" class="text-blue-400 hover:text-blue-300 underline">Log in!</a></p>
                    </div>
                </form>
            `;
            
            document.body.appendChild(e);
            return e;
        };

        const b = () => {
            const e = document.createElement("sl-dialog");
            e.label = "Settings";
            e.className = "settings-popup";
            
            e.innerHTML = `
                <sl-tab-group>
                    <sl-tab slot="nav" panel="theme">Theme</sl-tab>
                    <sl-tab slot="nav" panel="connections">Connections</sl-tab>
                    <sl-tab slot="nav" panel="account">Account</sl-tab>
                    <sl-tab slot="nav" panel="plugins">Plugins</sl-tab>
                    <sl-tab slot="nav" panel="quality">Quality</sl-tab>
                    
                    <sl-tab-panel name="theme" class="tab-panel">
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium text-white">Appearance</h3>
                            <div class="flex flex-col gap-2">
                                <sl-radio-group label="Theme Mode" name="theme-mode">
                                    <sl-radio value="light">Light</sl-radio>
                                    <sl-radio value="dark" checked>Dark</sl-radio>
                                    <sl-radio value="system">System Default</sl-radio>
                                </sl-radio-group>
                            </div>
                            <div class="mt-4">
                                <h4 class="text-md font-medium text-blue-300 mb-2">Accent Color</h4>
                                <div class="flex gap-2">
                                    <sl-color-picker value="#3b82f6"></sl-color-picker>
                                </div>
                            </div>
                        </div>
                    </sl-tab-panel>
                    
                    <sl-tab-panel name="connections" class="tab-panel">
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium text-white">Connected Accounts</h3>
                            <div class="bg-blue-900/50 p-4 rounded-lg">
                                <div class="flex justify-between items-center mb-4">
                                    <div class="flex items-center gap-2">
                                        <span class="text-blue-300">CloudSync</span>
                                        <sl-badge variant="success">Connected</sl-badge>
                                    </div>
                                    <sl-button size="small" variant="danger" outline>Disconnect</sl-button>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center gap-2">
                                        <span class="text-blue-300">SocialHub</span>
                                        <sl-badge variant="neutral">Not Connected</sl-badge>
                                    </div>
                                    <sl-button size="small" variant="primary" outline>Connect</sl-button>
                                </div>
                            </div>
                        </div>
                    </sl-tab-panel>
                    
                    <sl-tab-panel name="account" class="tab-panel">
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium text-white">Account Information</h3>
                            <sl-input label="Username" value="User123" class="mb-3 w-full"></sl-input>
                            <sl-input label="Email" value="user@example.com" class="mb-3 w-full"></sl-input>
                            <sl-button variant="primary" class="mt-2 !bg-blue-500">Save Changes</sl-button>
                            
                            <h3 class="text-lg font-medium text-white mt-6">Change Password</h3>
                            <sl-input type="password" label="Current Password" class="mb-3 w-full"></sl-input>
                            <sl-input type="password" label="New Password" class="mb-3 w-full"></sl-input>
                            <sl-input type="password" label="Confirm New Password" class="mb-3 w-full"></sl-input>
                            <sl-button variant="primary" class="mt-2 !bg-blue-500">Update Password</sl-button>
                        </div>
                    </sl-tab-panel>
                    
                    <sl-tab-panel name="plugins" class="tab-panel">
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium text-white">Installed Plugins</h3>
                            <div class="bg-blue-900/50 p-4 rounded-lg">
                                <div class="flex justify-between items-center mb-4">
                                    <div>
                                        <div class="text-white font-medium">Enhanced Player</div>
                                        <div class="text-sm text-blue-300">Adds additional playback features</div>
                                    </div>
                                    <sl-switch checked></sl-switch>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div>
                                        <div class="text-white font-medium">Auto Subtitle</div>
                                        <div class="text-sm text-blue-300">Generate subtitles automatically</div>
                                    </div>
                                    <sl-switch></sl-switch>
                                </div>
                            </div>
                            <sl-button variant="neutral" class="mt-2 !border-blue-400">Browse Plugin Store</sl-button>
                        </div>
                    </sl-tab-panel>
                    
                    <sl-tab-panel name="quality" class="tab-panel">
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium text-white">Video Quality</h3>
                            <div class="bg-blue-900/50 p-4 rounded-lg">
                                <sl-radio-group label="Default Playback Quality" name="quality">
                                    <sl-radio value="auto" checked>Auto (Recommended)</sl-radio>
                                    <sl-radio value="4k">4K</sl-radio>
                                    <sl-radio value="1080p">1080p</sl-radio>
                                    <sl-radio value="720p">720p</sl-radio>
                                    <sl-radio value="480p">480p</sl-radio>
                                </sl-radio-group>
                            </div>
                            
                        </div>
                    </sl-tab-panel>
                </sl-tab-group>
            `;
            
            document.body.appendChild(e);
            
            // Add an event listener to prevent default behavior on text clicks
            const preventCircleOnText = () => {
                const textElements = e.querySelectorAll('sl-radio span, sl-checkbox span, .tab-panel h3, .tab-panel h4, .tab-panel div');
                textElements.forEach(element => {
                    element.addEventListener('mousedown', (event) => {
                        // Only prevent the default if it's not the actual control
                        if (!event.target.closest('sl-radio::part(control)') && 
                            !event.target.closest('sl-checkbox::part(control)')) {
                            event.preventDefault();
                        }
                    });
                });
            };
            
            // Run this function after the dialog is fully loaded
            e.addEventListener('sl-after-show', preventCircleOnText);
            
            return e;
        };

        d = (e, n) => {
            if (!e || "string" != typeof e) return;
            const a = {
                username: i(e),
                timestamp: Date.now()
            };
            t.setItem("currentUser", JSON.stringify(a)), p(a)
        },
        u = () => {
            t.removeItem("currentUser"), p(null)
        },
        m = e => {
            e?.preventDefault();
            const t = new URLSearchParams(window.location.search).get("id");
            if (t) {
                const e = encodeURIComponent(t);
                window.location.href = `/watch?id=${e}`
            }
        },
        p = e => {
            const t = document.getElementById("user-container");
            t && (t.innerHTML = "", e && e.username ? t.appendChild(o("sl-dropdown", {}, [o("sl-button", {
                slot: "trigger",
                caret: !0,
                className: "!bg-transparent !border-blue-400"
            }, [document.createTextNode(e.username)]), o("sl-menu", {
                className: "bg-blue-700 border border-blue-300 shadow-md"
            }, [o("sl-menu-item", {}, [document.createTextNode("Profile")]), o("sl-menu-item", {}, [document.createTextNode("User Settings")]), o("sl-menu-item", {}, [document.createTextNode("Libraries")]), o("sl-menu-item", {
                onClick: u
            }, [document.createTextNode("Log Out")])])])) : t.appendChild(o("sl-button", {
                id: "user-button",
                variant: "neutral",
                size: "medium",
                className: "!bg-transparent !border-blue-400",
                title: "User Profile"
            }, [n("M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z")])))
        },
        h = l(),
        signupDialog = g(),
        settingsDialog = b(),
        f = e => {
            if (!e || "object" != typeof e) return null;
            const t = {
                thumbnail: i(e.thumbnail),
                title: i(e.title || "Untitled"),
                id: i(e.id)
            };
            return o("div", {
                className: "bg-gradient-to-br from-blue-800 to-gray-800 rounded-lg overflow-hidden shadow-lg"
            }, [o("img", {
                src: t.thumbnail || "/assets/placeholder.jpg",
                alt: t.title,
                className: "w-full h-40 object-cover cursor-pointer",
                loading: "lazy",
                onerror: "this.src='/assets/placeholder.jpg'",
                onClick: () => m({
                    id: t.id
                })
            }), o("div", {
                className: "p-4"
            }, [o("h3", {
                className: "text-white font-semibold mb-2 overflow-hidden text-ellipsis"
            }, [document.createTextNode(t.title)]), o("div", {
                className: "flex justify-between"
            }, [o("sl-button", {
                variant: "primary",
                size: "small",
                className: "!bg-blue-500 !border-blue-500",
                onClick: () => m({
                    id: t.id
                })
            }, [n("M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z")]), o("sl-button", {
                variant: "neutral",
                size: "small",
                className: "!bg-transparent !border-blue-400"
            }, [n("M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z")])])])]);
        };
        const c = o("main", {
            className: "flex-1 overflow-y-auto bg-gradient-to-b from-blue-900 to-gray-900 p-4 ml-16"
        }, [o("h2", {
            className: "text-white text-xl font-semibold mb-4"
        }, [document.createTextNode("Uh oh—that page doesn't exist. Either go back to the home page or try again later.")]), o("div", {
            id: "video-grid",
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        })]);
        e.append(a, r, c);
        const v = s();
        p(v);
        document.getElementById("user-container").addEventListener("click", e => {
            s() || h.show()
        });
        document.getElementById("settings-button").addEventListener("click", e => {
            settingsDialog.show();
        });

        document.getElementById("login-form").addEventListener("submit", e => {
            e.preventDefault();
            const t = new FormData(e.target),
                n = t.get("username"),
                o = t.get("password");
            n && o && (d(n, o), h.hide())
        });

        document.getElementById("signup-link").addEventListener("click", e => {
            e.preventDefault();
            h.hide();
            signupDialog.show();
        });
        document.getElementById("login-link").addEventListener("click", e => {
            e.preventDefault();
            signupDialog.hide();
            h.show();
        });


    (() => {
        const e = document.getElementById("video-grid");
        if (!e) return;
        e.innerHTML = "";
        for (let t = 0; t < 8; t++) {
            const t = o("sl-skeleton", {
                effect: "sheen",
                className: "w-full h-60"
            });
            e.appendChild(t)
        }
        setTimeout(() => {
            try {
                const n = t.getItem("videos"),
                    a = n ? JSON.parse(n) : [];
                if (e.innerHTML = "", Array.isArray(a)) a.forEach(t => {
                    try {
                        const n = f(t);
                        n && e.appendChild(n)
                    } catch (e) {
                        console.error("Error rendering video:", e)
                    }
                });
                else throw new Error("Invalid videos data")
            } catch (t) {
                console.error("Error loading videos:", t), e.innerHTML = "<p class='text-white'>Error loading videos. Please try again later.</p>"
            }
        }, 2e3)
    })()
})();
