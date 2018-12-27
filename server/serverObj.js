
let user1 = {
    namespace: "/hello-telos",
    rooms: {
        public: [
            "devs",
            "abps"
        ],
        private: [
            "Craig",
            "Ed"
        ]
    }
};

let user2 = {
    namespace: "/hello-telos",
    rooms: {
        public: [
            "devs2",
            "abps2"
        ],
        private: [
            "Craig2",
            "Ed2"
        ]
    }
};

module.exports = { user1, user2 };
