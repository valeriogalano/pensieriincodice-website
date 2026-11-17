const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { join } = require('node:path');

const source = readFileSync(join(__dirname, '../themes/picnew/layouts/partials/footer-player.html'), 'utf8');
const helper = source.slice(source.indexOf('    function setPlaybackRate('), source.indexOf('    window.playEpisode ='));

test('playback rates keep both selectors usable, including swipe and saved values', () => {
    const select = () => ({
        options: [0.5, 0.8, 1, 1.2, 1.5, 2, 2.5, 3].map(value => ({ value: String(value) })),
        add(option) { this.options.push(option); },
        set value(value) { this.selected = this.options.some(option => option.value === value) ? value : ''; },
        get value() { return this.selected; }
    });
    const audio = {};
    const speedSelect = select();
    const expandedSpeedSelect = select();
    const setRate = runInNewContext(helper + '\nsetPlaybackRate', {
        audio, speedSelect, expandedSpeedSelect,
        Option: function (text, value) { this.text = text; this.value = value; }
    });
    for (const rate of [1, 1.5, 1.1, 0.6, 2.9, 0.5, 3]) {
        setRate(rate);
        assert.equal(audio.playbackRate, rate);
        assert.equal(speedSelect.value, String(rate));
        assert.equal(expandedSpeedSelect.value, String(rate));
        setRate(speedSelect.value);
        assert.equal(audio.playbackRate, rate);
    }
    const count = speedSelect.options.length;
    setRate(1.1);
    assert.equal(speedSelect.options.length, count);
    for (const rate of [undefined, null, '', 'bad', NaN, Infinity, -1, 0, 4]) {
        setRate(rate);
        assert.equal(audio.playbackRate, 1);
        assert.equal(speedSelect.value, '1');
        assert.equal(expandedSpeedSelect.value, '1');
    }
});
