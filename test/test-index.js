const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');

chai.use(require('chai-dom'));
require('jsdom-global')();

describe('index.html', () => {

    beforeEach((done) => {
        JSDOM.fromFile('index.html')
        .then((dom) => {
          global.document = dom.window.document
        })
        .then(done, done);
    });

    describe('Create a img tag', () => {
        it('img tag should exist', () => {
            const img = document.querySelector('img')
            expect(img).to.exist
        })
        it('image tag should have a src attribute that points to the kittin image', () => {
            const img = document.querySelector('img')
            expect(img).to.have.attribute('src', 'https://bit.ly/fcc-relaxing-cat')           
        })
        it(`image element's alt attribute should not be empty`, () => {
            const img = document.querySelector('img')
            expect(img).to.have.attribute('alt').and.to.not.equal('')
        })
    })

})