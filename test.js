describe('some-thing', function () {
    var someElement;


    beforeEach(function () {
        someElement = document.createElement('some-thing');
    });


    it('created element should match string representation', function () {
        var expectedEl = '<some-thing></some-thing>';

        var wrapper = document.createElement('div');
        wrapper.appendChild(someElement);

        expect(wrapper.innerHTML).toBe(expectedEl);
    });

    it('created element should have shadow root', function () {

        var wrapper = document.createElement('div');
        wrapper.appendChild(someElement);

        expect(wrapper.querySelector('some-thing').shadowRoot).not.toBeNull();

    })
});