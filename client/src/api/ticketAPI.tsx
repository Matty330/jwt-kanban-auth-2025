import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';
import AuthService from '../utils/auth'; // ✅ Corrected import

const retrieveTickets = async () => {
  try {
    const response = await fetch('/api/tickets/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AuthService.getToken()}`
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error retrieving tickets:', err);
    return [];
  }
};

const retrieveTicket = async (id: number | null): Promise<TicketData> => {
  try {
    const response = await fetch(`/api/tickets/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AuthService.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }
    return data;
  } catch (err) {
    console.error('Error retrieving ticket:', err);
    return Promise.reject('Could not fetch singular ticket');
  }
};

const createTicket = async (body: TicketData) => {
  try {
    const response = await fetch('/api/tickets/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AuthService.getToken()}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error creating ticket:', err);
    return Promise.reject('Could not create ticket');
  }
};

const updateTicket = async (ticketId: number, body: TicketData): Promise<TicketData> => {
  try {
    const response = await fetch(`/api/tickets/${ticketId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AuthService.getToken()}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error updating ticket:', err);
    return Promise.reject('Could not update ticket');
  }
};

const deleteTicket = async (ticketId: number): Promise<ApiMessage> => {
  try {
    const response = await fetch(`/api/tickets/${ticketId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AuthService.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error deleting ticket:', err);
    return Promise.reject('Could not delete ticket');
  }
};

export { createTicket, deleteTicket, retrieveTickets, retrieveTicket, updateTicket };
