import '../accordion/accordion.scss';

export function accordion(triggerClass) {
    var accordionTriggers = document.getElementsByClassName(triggerClass);

    for (let i = 0; i < accordionTriggers.length; i++) {
        accordionTriggers[i].onclick = function() {
            var parentClassList = this.parentNode.classList;
            var content = this.nextElementSibling;
            var height = content.scrollHeight;

            if (parentClassList.contains('is-active')) {
                parentClassList.remove('is-active');
                content.style.height = "0px";
            } else {
                parentClassList.add('is-active');
                content.style.height = height + "px";
            }
        }
    }
}