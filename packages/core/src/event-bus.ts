// Simple event bus for plugin communication

export class EventBus {
  private listeners: Map<string, Function[]> = new Map();

  on(event: string, handler: Function): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(handler);
  }

  off(event: string, handler: Function): void {
    const handlers = this.listeners.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }

  emit(event: string, data?: any): void {
    const handlers = this.listeners.get(event);
    if (handlers) {
      handlers.forEach(handler => {
        try {
          handler(data);
        } catch (error) {
          console.error(`Error in event handler for ${event}:`, error);
        }
      });
    }
  }

  clear(): void {
    this.listeners.clear();
  }

  // Get all events (useful for debugging)
  getEvents(): string[] {
    return Array.from(this.listeners.keys());
  }

  // Get listener count for an event
  getListenerCount(event: string): number {
    return this.listeners.get(event)?.length || 0;
  }
}