import casual from 'casual';

export const mockRemoteResolver = {
    
    Date: () => {
        return new Date();
    },
    DateTime: () => {
        return new Date().toTimeString();
    },
    LocalDate: () => {
        return new Date().toLocaleDateString();
    },
    LocalTime: () => {
        return new Date().toLocaleTimeString();
    },
    Long: () => {
        return casual.integer(0, 100000);
    }
};
