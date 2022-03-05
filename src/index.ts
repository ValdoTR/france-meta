/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    
    // =================== METAVERSE ===================

    WA.room.onEnterLayer('zones/metaverse/1').subscribe(() => {
        const id = "1"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/2').subscribe(() => {
        const id = "2"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/3').subscribe(() => {
        const id = "3"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/4').subscribe(() => {
        const id = "4"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/5').subscribe(() => {
        const id = "5"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/6').subscribe(() => {
        const id = "6"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/6').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/playlist').subscribe(closePopup)

    // =================== VIDEOS ===================

    WA.room.onEnterLayer('zones/videos/playlist').subscribe(() => {
        const description = WA.state["videosDescription"] as string;
        const url = WA.state["videosURL"] as string;
        const embed = WA.state["videosEmbed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("videosPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/videos/playlist').subscribe(closePopup)

    // =================== PATRIMOINE ===================

    WA.room.onEnterLayer('zones/patrimoine/1').subscribe(() => {
        const id = "1"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/patrimoine/2').subscribe(() => {
        const id = "2"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/patrimoine/3').subscribe(() => {
        const id = "3"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/patrimoine/4').subscribe(() => {
        const id = "4"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/patrimoine/5').subscribe(() => {
        const id = "5"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/patrimoine/6').subscribe(() => {
        const id = "6"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/6').subscribe(closePopup)

    WA.room.onEnterLayer('zones/patrimoine/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/playlist').subscribe(closePopup)

    // =================== FORMATIONS ===================

    WA.room.onEnterLayer('zones/formations/1').subscribe(() => {
        const id = "1"
        const description = WA.state["formations"+id+"Description"] as string;
        const url = WA.state["formations"+id+"URL"] as string;
        const embed = WA.state["formations"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("formations"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/formations/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/formations/2').subscribe(() => {
        const id = "2"
        const description = WA.state["formations"+id+"Description"] as string;
        const url = WA.state["formations"+id+"URL"] as string;
        const embed = WA.state["formations"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("formations"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/formations/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/formations/3').subscribe(() => {
        const id = "3"
        const description = WA.state["formations"+id+"Description"] as string;
        const url = WA.state["formations"+id+"URL"] as string;
        const embed = WA.state["formations"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("formations"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/formations/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/formations/4').subscribe(() => {
        const id = "4"
        const description = WA.state["formations"+id+"Description"] as string;
        const url = WA.state["formations"+id+"URL"] as string;
        const embed = WA.state["formations"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("formations"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/formations/4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/formations/5').subscribe(() => {
        const id = "5"
        const description = WA.state["formations"+id+"Description"] as string;
        const url = WA.state["formations"+id+"URL"] as string;
        const embed = WA.state["formations"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("formations"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/formations/5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/formations/6').subscribe(() => {
        const id = "6"
        const description = WA.state["formations"+id+"Description"] as string;
        const url = WA.state["formations"+id+"URL"] as string;
        const embed = WA.state["formations"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("formations"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/formations/6').subscribe(closePopup)

    WA.room.onEnterLayer('zones/formations/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["formations"+id+"Description"] as string;
        const url = WA.state["formations"+id+"URL"] as string;
        const embed = WA.state["formations"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("formations"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/formations/playlist').subscribe(closePopup)

    // =================== LUXE ===================

    WA.room.onEnterLayer('zones/luxe/1').subscribe(() => {
        const id = "1"
        const description = WA.state["luxe"+id+"Description"] as string;
        const url = WA.state["luxe"+id+"URL"] as string;
        const embed = WA.state["luxe"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("luxe"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/luxe/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/luxe/2').subscribe(() => {
        const id = "2"
        const description = WA.state["luxe"+id+"Description"] as string;
        const url = WA.state["luxe"+id+"URL"] as string;
        const embed = WA.state["luxe"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("luxe"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/luxe/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/luxe/3').subscribe(() => {
        const id = "3"
        const description = WA.state["luxe"+id+"Description"] as string;
        const url = WA.state["luxe"+id+"URL"] as string;
        const embed = WA.state["luxe"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("luxe"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/luxe/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/luxe/4').subscribe(() => {
        const id = "4"
        const description = WA.state["luxe"+id+"Description"] as string;
        const url = WA.state["luxe"+id+"URL"] as string;
        const embed = WA.state["luxe"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("luxe"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/luxe/4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/luxe/5').subscribe(() => {
        const id = "5"
        const description = WA.state["luxe"+id+"Description"] as string;
        const url = WA.state["luxe"+id+"URL"] as string;
        const embed = WA.state["luxe"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("luxe"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/luxe/5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/luxe/6').subscribe(() => {
        const id = "6"
        const description = WA.state["luxe"+id+"Description"] as string;
        const url = WA.state["luxe"+id+"URL"] as string;
        const embed = WA.state["luxe"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("luxe"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/luxe/6').subscribe(closePopup)

    WA.room.onEnterLayer('zones/luxe/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["luxe"+id+"Description"] as string;
        const url = WA.state["luxe"+id+"URL"] as string;
        const embed = WA.state["luxe"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("luxe"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/luxe/playlist').subscribe(closePopup)

    // =================== ASSURANCE ===================

    WA.room.onEnterLayer('zones/assurance/1').subscribe(() => {
        const id = "1"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/assurance/2').subscribe(() => {
        const id = "2"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/assurance/3').subscribe(() => {
        const id = "3"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/assurance/4').subscribe(() => {
        const id = "4"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/assurance/5').subscribe(() => {
        const id = "5"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/assurance/6').subscribe(() => {
        const id = "6"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/6').subscribe(closePopup)

    WA.room.onEnterLayer('zones/assurance/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/playlist').subscribe(closePopup)

    // =================== VINS ===================

    WA.room.onEnterLayer('zones/vins/1').subscribe(() => {
        const id = "1"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/vins/2').subscribe(() => {
        const id = "2"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/vins/3').subscribe(() => {
        const id = "3"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/vins/4').subscribe(() => {
        const id = "4"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/vins/5').subscribe(() => {
        const id = "5"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/vins/6').subscribe(() => {
        const id = "6"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/6').subscribe(closePopup)

    WA.room.onEnterLayer('zones/vins/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/playlist').subscribe(closePopup)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

function openWebsite(url: string, embed: boolean = true){
    if (embed) {
        WA.nav.openCoWebSite(url)
    } else {
        WA.nav.openTab(url)
    }
    closePopup()
}

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
