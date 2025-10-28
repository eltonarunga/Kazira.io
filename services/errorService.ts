
/**
 * Processes an error object and returns a user-friendly error message.
 * Handles common network and API issues.
 * @param error The error object, which can be of any type.
 * @returns A string containing a user-friendly error message.
 */
export const getFriendlyErrorMessage = (error: unknown): string => {
  // Check for offline status first, as it's a common cause for fetch errors.
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return "You seem to be offline. Please check your internet connection and try again.";
  }

  if (error instanceof Error) {
    const errorMessage = error.message.toLowerCase();

    // Specific Gemini API error messages based on status codes or content
    if (errorMessage.includes('api key not valid')) {
      return "The AI service API key is invalid. Please contact support.";
    }
     if (errorMessage.includes('[400]')) {
        return "Your request could not be processed by the AI, it may have been blocked. Please try modifying your prompt.";
    }
    if (errorMessage.includes('[403]')) {
      return "There's a permission issue with the AI service. Please contact support if this problem persists.";
    }
    if (errorMessage.includes('[429]') || errorMessage.includes('quota')) {
      return "The AI service is experiencing high demand. Please try again in a little while.";
    }
    if (errorMessage.includes('[500]') || errorMessage.includes('[503]') || errorMessage.includes('service unavailable')) {
      return "The AI service is temporarily unavailable. We're working on it! Please try again in a few moments.";
    }
    
    // Custom error messages thrown from services
    if (errorMessage.includes("ai response format is invalid")) {
      return "The AI returned a response in an unexpected format. Please try rephrasing your input; being more specific can help.";
    }
    
    // Generic network/fetch error
    if (errorMessage.includes('failed to fetch')) {
        return "We couldn't reach the AI service. Please check your internet connection and firewall settings.";
    }
  }

  // Fallback for unknown or non-Error objects
  return "An unexpected error occurred. Please try again. If the problem continues, please contact support.";
};
