// Constants
export const RGX = {
    isDate: /^\d{4}\-\d{2}\-\d{2}/,
    isTELink: /^\/[a-z0-9]/i
}

export const TE_HOME_LINK = 'https://tradingeconomics.com';


// Functions
export const el = <T>(tag: string, props: Record<string,string> = {}):HTMLElement | T => Object.assign(document.createElement(tag), props);


export const charSplitOnCaps = (str: string) => {
    
   const retStr = (/[A-Z]/.test(str) ? (str.match(/[A-Z][a-z]+/g) || []).join(' ') : str);

   if (retStr) return retStr;
   return str;
}

export const formatData = (str: string): string | HTMLElement => {  
    //try date
    if (RGX.isDate.test(str)) {
        return (new Date(str)).toLocaleDateString()
    }

    if (RGX.isTELink.test(str)) {
        const link = el('a', {
            href: TE_HOME_LINK + str, 
            textContent: str,
            target: '_blank'
        }) as HTMLAnchorElement;

        return link;
    }
    // try other things if we have em

    return str;
}