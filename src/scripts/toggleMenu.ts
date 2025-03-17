
export default function menuEventListener($element: HTMLElement, $overlay: HTMLElement, $diplayElement: HTMLElement, event?: () => void) {

    $element.addEventListener("click", () => {

        $diplayElement.classList.remove("hidden");
        $overlay.classList.remove("hidden")
    });

    $overlay.addEventListener("click", () => {

        $diplayElement.classList.add("hidden");
        $overlay.classList.add("hidden")

        if (event?.()) {
            event()
        }
    });
}