import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from 'primereact/card';
import './App.css';
import { injectIntl } from "react-intl";

const Component = () => {
  const provaElenco1 = [
    {
      id: 'P01',
      name: 'Matteo'
    },
    {
      id: 'P02',
      name: 'Andrea'
    },
    {
      id: 'P03',
      name: 'Riccardo'
    }]
  const provaElenco2 = [
    {
      id: 'L01',
      name: 'Casa'
    },
    {
      id: 'L02',
      name: 'Ufficio'
    },
    {
      id: 'L03',
      name: 'Parco'
    }]
  const [persone, setPersone] = useState(provaElenco1);
  const [luoghi, setLuoghi] = useState(provaElenco1);

  function handleOnPersoneDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(persone);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPersone(items);
  }
  function handleOnLuoghiDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(luoghi);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLuoghi(items);
  }

  return (
    <div className="App">
      <h2>Prova Drag and Drop</h2>
      <div className="p-grid p-ai-center">
        <div className="p-col-6 p-m-0 p-p-0 p-grid p-ai-center">
          <h4>Area Drop</h4>
          <Card>

          </Card>
        </div>

        <div className="p-col-6 p-m-0 p-p-0 p-grid p-ai-center">
          <h4>Lista Persone Drag</h4>
          <Card>
            <DragDropContext onDragEnd={handleOnPersoneDragEnd}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                    {persone.map(({ id, name }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <p>{name}</p>
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </Card>
        </div>

        <div className="p-col-6 p-m-0 p-p-0 p-grid p-ai-center">
          <h4>Lista Luoghi Drag</h4>
          <Card>
            <DragDropContext onDragEnd={handleOnLuoghiDragEnd}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                    {persone.map(({ id, name }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <p>{name}</p>
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </Card>
        </div>
      </div>
    </div>);
}
export default injectIntl(Component);