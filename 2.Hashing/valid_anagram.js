var isAnagram = function (s, t) {
    const mp = {};

    for (let i = 0; i < s.length; i++) {
        if (mp[s[i]]) {
            mp[s[i]] += 1;
        }
        else {
            mp[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (mp[t[i]] === undefined) {
            return false;
        }
        else {
            mp[t[i]] -= 1;
            if (mp[t[i]] == 0) {
                delete mp[t[i]];
            }
        }
    }
    return Object.keys(mp).length == 0;
    
};