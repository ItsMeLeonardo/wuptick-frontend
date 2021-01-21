import ImageTool from '@editorjs/image';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import { uploadImageEditor } from '../../requests/uploadImageEditor';

export const EDITORCONF = {
    holder: 'editor',
    placeholder: 'Write a description...',
    autofocus: true,
    logLevel: 'WARN',
    tools: {
        image: {
            class: ImageTool,
            config: {
                uploader: {
                    /**
                     * Upload file to the server and return an uploaded image data
                     * @param {File} file - file selected from the device or pasted by drag-n-drop
                     * @return {Promise.<{success, file: {url}}>}
                     */
                    uploadByFile(file) {
                        return uploadImageEditor(file);
                    },

                    /**
                     * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
                     * @param {string} url - pasted image URL
                     * @return {Promise.<{success, file: {url}}>}
                     */
                    uploadByUrl(url) {
                        return uploadImageEditor(url);
                    },
                },
            },
        },
        header: {
            class: Header,
            shortcut: 'CMD+SHIFT+H',
            config: {
                placeholder: 'Enter a header',
                levels: [2, 3],
                defaultLevel: 3,
            },
        },
        list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L',
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: "Quote's author",
            },
        },
    },
};
