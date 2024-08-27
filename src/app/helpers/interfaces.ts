export interface InstalledDomains {
    installedDomain: string;
    lastActivityDate: Date;
}

export interface Event {
    eventId: string;
    name: string;
    description?: string;
    openingDate?: string;
    closingDate?: string;
    location?: string;
    
    // Additional properties client side only
    openingDateLocalTimezone?: string;
    closingDateLocalTimezone?: string;
}

export interface Campaign {
    campaignId: string;
    name?: string;
    description?: string;
    modalTitle?: string;
    modalText?: string;
    modalIncentiveText?: string;
    modalIncentiveTCs?: string;
    modalPattern?: string;
    modalPatternLocationEnum?: string;
    postText?: string;
    postImageUrl?: string;
    postForwardUrl?: string;
    event?: Event;

    // Additional properties client side only

}
