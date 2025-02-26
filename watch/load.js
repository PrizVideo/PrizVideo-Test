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
            title: "Settings"
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
                .login-popup::part(base) {
                    background: linear-gradient(to bottom right, #1e3a8a, #1e40af);
                    border: 2px solid rgba(147, 197, 253, 0.3);
                    border-radius: 1rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
                .login-popup::part(header) {
                    color: white;
                    font-size: 1.5rem;
                    border-bottom: 1px solid rgba(147, 197, 253, 0.2);
                }
                .login-popup::part(body) {
                    padding: 2rem;
                }
                .login-popup sl-input::part(base) {
                    background: rgba(30, 58, 138, 0.5);
                    border: 1px solid rgba(147, 197, 253, 0.3);
                }
                .login-popup sl-input::part(input) {
                    color: white;
                }
                .login-popup sl-input::part(label) {
                    color: #93c5fd;
                }
            `;
            
            e.innerHTML = `
                ${style.outerHTML}
                <form id="login-form" class="space-y-6">
                    <sl-input name="username" label="Username" required class="mb-4 w-full"></sl-input>
                    <sl-input name="password" type="password" label="Password" required class="mb-6 w-full"></sl-input>
                    <div class="flex justify-between items-center gap-4">
                        <sl-button type="submit" variant="primary" class="w-full !bg-blue-500 hover:!bg-blue-600 transition-colors duration-200">Log In</sl-button>
                        <sl-button type="button" variant="neutral" class="w-full !border-blue-400 hover:!bg-blue-700/50 transition-colors duration-200">Create Account</sl-button>
                    </div>
                </form>
            `;
            
            document.body.appendChild(e);
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
        }, [document.createTextNode("This page is a placeholder for the watch page. A watch page will be coming soon.")]), o("div", {
            id: "video-grid",
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        })]);
        e.append(a, r, c);
        const v = s();
        p(v);
        document.getElementById("user-container").addEventListener("click", e => {
            s() || h.show()
        });
        document.getElementById("login-form").addEventListener("submit", e => {
            e.preventDefault();
            const t = new FormData(e.target),
                n = t.get("username"),
                o = t.get("password");
            n && o && (d(n, o), h.hide())
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
