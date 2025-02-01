import { API_CONFIG } from '../config/api';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export class ChatService {
  private apiKey: string;
  private messages: ChatMessage[] = [];

  constructor(apiKey: string = API_CONFIG.OPENAI_API_KEY) {
    this.apiKey = apiKey;
    // Add initial system message to set context
    this.messages.push({
      role: 'system',
      content: 'You are a helpful farming assistant that provides advice about urban farming, hydroponics, and sustainable practices.'
    });
  }

  async sendMessage(userMessage: string): Promise<string> {
    try {
      this.messages.push({ role: 'user', content: userMessage });

      const response = await fetch(API_CONFIG.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: API_CONFIG.MODEL,
          messages: this.messages,
          max_tokens: API_CONFIG.MAX_TOKENS,
          temperature: API_CONFIG.TEMPERATURE,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from API');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content;
      
      this.messages.push({ role: 'assistant', content: assistantMessage });
      return assistantMessage;
    } catch (error) {
      console.error('Chat error:', error);
      return 'I apologize, but I am unable to respond at the moment. Please try again later.';
    }
  }

  setApiKey(newKey: string) {
    this.apiKey = newKey;
  }

  clearContext() {
    this.messages = [this.messages[0]]; // Keep only the system message
  }
}